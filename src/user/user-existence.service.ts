import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/persistence/prisma.service';
import { UserNotFoundException } from '@/user/exception/user-not-found.exception';

@Injectable()
export class UserExistenceService {
  constructor(private readonly prismaService: PrismaService) {}

  async existsById(userId: string): Promise<boolean> {
    const user = await this.prismaService.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        id: true,
      },
    });

    return user !== null;
  }

  async assertExistsById(userId: string): Promise<void> {
    const exists = await this.existsById(userId);

    if (!exists) {
      throw new UserNotFoundException(userId);
    }
  }
}
