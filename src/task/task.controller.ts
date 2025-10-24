import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';
import { CreateTasksRequestDto } from '@/task/dto/create-tasks-request.dto';
import { CreateTasksResponseDto } from '@/task/dto/create-tasks-response.dto';
import { UpdateTaskRequestDto } from '@/task/dto/update-task-request.dto';
import { UpdateTaskResponseDto } from '@/task/dto/update-task-response.dto';
import { TASK_ID_API_PARAM_OPTIONS } from '@/task/task.openapi.constants';
import { TaskService } from '@/task/task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly todoService: TaskService) {}

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({ type: CreateTasksResponseDto })
  createTodo(
    @Body() body: CreateTasksRequestDto,
  ): Promise<CreateTasksResponseDto> {
    return this.todoService.createTodos(body);
  }

  @Put(':taskId')
  @ApiOkResponse({ type: UpdateTaskResponseDto })
  @ApiParam(TASK_ID_API_PARAM_OPTIONS)
  async updateTask(
    @Param('taskId') taskId: string,
    @Body() body: UpdateTaskRequestDto,
  ): Promise<UpdateTaskResponseDto> {
    return {};
  }

  @Delete(':taskId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse()
  @ApiParam(TASK_ID_API_PARAM_OPTIONS)
  async deleteTask(@Param('taskId') taskId: string) {}
}
