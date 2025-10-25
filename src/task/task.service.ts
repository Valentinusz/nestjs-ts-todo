import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/persistence/prisma.service';
import { CreateTasksRequestDto } from '@/task/dto/create-tasks-request.dto';
import { CreateTasksResponseDto } from '@/task/dto/create-tasks-response.dto';
import { Prisma } from '@generated/prisma';

@Injectable()
export class TaskService {
  constructor(private prismaService: PrismaService) {}

  async createTasks(
    req: CreateTasksRequestDto,
  ): Promise<CreateTasksResponseDto> {
    const data: Prisma.TaskCreateManyArgs['data'] = req.tasks.map(
      ({ title, details }) => ({
        id: this.prismaService.getUlid(),
        title,
        details,
        createdById: "100"
      }),
    );

    await this.prismaService.task.createMany({
      data,
    });

    return {
      tasks: data.map(({ id, title, details }) => ({
        id,
        title: title ?? undefined,
        details: details ?? undefined,
      })),
    };
  }
}
