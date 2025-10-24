import { Injectable } from '@nestjs/common';
import { ulid } from 'ulid';
import { PrismaService } from '@/persistence/prisma.service';
import { CreateUserResponseDto } from '@/user/dto/create-user-response.dto';
import { UserDto } from '@/user/dto/user.dto';
import { UserNotFoundException } from '@/user/exception/user-not-found.exception';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUser(userId: string): Promise<UserDto> {
    const user = await this.prismaService.user.findFirst({
      select: {
        createdAt: true,
      },
      where: {
        id: userId,
      },
    });

    if (user === null) {
      throw new UserNotFoundException(userId);
    }

    return user;
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
    try {
      await this.prismaService.user.update({
        where: {
          id: userId,
        },
        data: {
          deletedAt: null,
        },
      });
    } catch {
      throw new UserNotFoundException(userId);
    }
  }

  async markUserAsDeleted(userId: string): Promise<void> {
    try {
      await this.prismaService.user.update({
        where: {
          id: userId,
        },
        data: {
          deletedAt: new Date(),
        },
      });
    } catch {
      throw new UserNotFoundException(userId);
    }
  }
}
