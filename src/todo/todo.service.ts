import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/persistence/prisma.service';
import { CreateTodosRequestDto } from '@/todo/dto/create-todos-request.dto';
import { CreateTodosResponseDto } from '@/todo/dto/create-todos-response.dto';
import { Prisma } from '@generated/prisma';

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {}

  async createTodos(
    req: CreateTodosRequestDto,
  ): Promise<CreateTodosResponseDto> {
    const data: Prisma.TodoCreateManyArgs['data'] = req.todos.map(
      ({ title, details }) => ({
        id: this.prismaService.getUlid(),
        title,
        details,
      }),
    );

    await this.prismaService.todo.createMany({
      data,
    });

    return {
      todos: data.map(({ id, title, details }) => ({
        id,
        title,
        details,
      })),
    };
  }
}
