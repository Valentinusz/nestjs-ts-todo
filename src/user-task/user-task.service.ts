import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/persistence/prisma.service';
import { GetTasksOfUserResponseDto } from '@/user-task/dto/get-tasks-of-user-response.dto';

@Injectable()
export class UserTaskService {
  constructor(private readonly prismaService: PrismaService) {}

  async findTodosOfUser(): Promise<GetTasksOfUserResponseDto> {
    const data = await this.prismaService.task.findMany({
      select: { id: true, title: true, details: true },
    });

    return {
      data,
    };
  }
}
