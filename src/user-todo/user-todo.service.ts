import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/persistence/prisma.service';
import { GetTodosOfUserResponseDto } from '@/user-todo/dto/get-todos-of-user-response.dto';

@Injectable()
export class UserTodoService {
  constructor(private readonly prismaService: PrismaService) {}

  async findTodosOfUser(): Promise<GetTodosOfUserResponseDto> {
    const data = await this.prismaService.todo.findMany({
      select: { id: true, title: true, details: true },
    });

    return {
      data,
    };
  }
}
