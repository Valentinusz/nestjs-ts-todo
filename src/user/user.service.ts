import { Injectable, NotFoundException } from '@nestjs/common';
import { ulid } from 'ulid';
import { PrismaService } from '@/persistence/prisma.service';
import { CreateUserResponseDto } from '@/user/dto/create-user-response.dto';
import { UserDto } from '@/user/dto/user.dto';

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
      throw new NotFoundException();
    }

    return user;
  }

  async createUser(): Promise<CreateUserResponseDto> {
    const id = ulid();

    this.prismaService.user.create({
      data: {
        id,
      },
    });

    const { createdAt } = await this.prismaService.user.findFirstOrThrow({
      select: {
        createdAt: true,
      },
      where: {
        id,
      },
    });

    return {
      id,
      createdAt,
    };
  }

  async markUserAsNotDeleted(userId: string): Promise<void> {
    this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        deletedAt: null,
      },
    });
  }

  async markUserAsDeleted(userId: string): Promise<void> {
    this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
