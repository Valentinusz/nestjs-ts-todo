import { ConflictException, Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { ulid } from 'ulid';
import { KeycloakUserService } from '@/keycloak/keycloak-user.service';
import { PrismaService } from '@/persistence/prisma.service';
import { CreateUserResponseDto } from '@/user/dto/create-user-response.dto';
import { UserDto } from '@/user/dto/user.dto';
import { UserNotFoundException } from '@/user/exception/user-not-found.exception';
import { User } from '@generated/prisma/tasks';

@Injectable()
export class UserService {
  constructor(
    private readonly keycloakUserService: KeycloakUserService,
    private readonly prismaService: PrismaService,
  ) {}

  async getUser(userId: string): Promise<UserDto> {
    const user = await this.prismaService.user.findFirst({
      select: {
        createdAt: true,
        deletedAt: true,
      },
      where: {
        id: userId,
      },
    });

    if (user === null) {
      throw new UserNotFoundException(userId);
    }

    const {data} = await this.keycloakUserService.getData();

    console.log(data[0]);

    return {
      createdAt: user.createdAt,
      deletedAt: user.deletedAt ?? undefined,
    };
  }

  async createUser(): Promise<CreateUserResponseDto> {
    const id = ulid();

    const { createdAt } = await this.prismaService.user.create({
      data: {
        id,
      },
      select: {
        createdAt: true,
      },
    });

    return {
      id,
      createdAt,
    };
  }

  async markUserAsNotDeleted(userId: string): Promise<void> {
    const user = await this.getDeletedAtOnlyOfUser(userId);

    if (user === null) {
      throw new UserNotFoundException(userId);
    }

    const { deletedAt } = user;

    if (deletedAt === null) {
      throw new ConflictException(
        `User with id ${userId} is not marked for deletion`,
      );
    }

    await this.prismaService.user.updateMany({
      where: {
        id: userId,
      },
      data: {
        deletedAt: null,
      },
    });
  }

  async markUserAsDeleted(userId: string): Promise<void> {
    const user = await this.getDeletedAtOnlyOfUser(userId);

    if (user === null) {
      throw new UserNotFoundException(userId);
    }

    const { deletedAt } = user;

    if (deletedAt !== null) {
      throw new ConflictException(
        `User with id ${userId} is already being deleted`,
      );
    }

    await this.prismaService.user.updateMany({
      where: {
        id: userId,
      },
      data: {
        deletedAt: dayjs().add(30, 'days').toDate(),
      },
    });
  }

  async getDeletedAtOnlyOfUser(
    userId: string,
  ): Promise<{ deletedAt: User['deletedAt'] } | null> {
    return this.prismaService.user.findFirst({
      select: {
        deletedAt: true,
      },
      where: {
        id: userId,
      },
    });
  }
}
