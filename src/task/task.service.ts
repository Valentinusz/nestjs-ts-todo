import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/persistence/prisma.service';
import { CreateTasksRequestDto } from '@/task/dto/create-tasks-request.dto';
import { CreateTasksResponseDto } from '@/task/dto/create-tasks-response.dto';
import { Prisma } from '@generated/prisma';

@Injectable()
export class TaskService {
  constructor(private prismaService: PrismaService) {}

  async createTodos(
    req: CreateTasksRequestDto,
  ): Promise<CreateTasksResponseDto> {
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
