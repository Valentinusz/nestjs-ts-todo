import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreateTasksResponseDto } from '@/task/dto/create-tasks-response.dto';
import type { GetTasksOfUserResponseDto } from '@/user-task/dto/get-tasks-of-user-response.dto';
import { UserTaskService } from '@/user-task/user-task.service';

@Controller('users/:userId/tasks')
export class UserTaskController {
  constructor(private userTodoService: UserTaskService) {}

  @Get()
  @ApiOkResponse({ type: CreateTasksResponseDto })
  getTodosOfUser(
    @Param('userId') userId: string,
  ): Promise<GetTasksOfUserResponseDto> {
    return this.userTodoService.findTodosOfUser();
  }
}
