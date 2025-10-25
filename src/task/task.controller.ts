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
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { ErrorResponseDto } from '@/openapi/error-response.dto';
import { CreateTasksRequestDto } from '@/task/dto/create-tasks-request.dto';
import { CreateTasksResponseDto } from '@/task/dto/create-tasks-response.dto';
import { UpdateTaskRequestDto } from '@/task/dto/update-task-request.dto';
import { UpdateTaskResponseDto } from '@/task/dto/update-task-response.dto';
import {
  TASK_ID_API_PARAM_OPTIONS,
  TASK_NOT_FOUND_API_RESPONSE_OPTIONS,
} from '@/task/task.openapi.constants';
import { TaskService } from '@/task/task.service';
import { VALIDATION_FAILED_API_RESPONSE_OPTIONS } from '@/openapi/decorator-options.constants';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({
    description: 'Create a list of tasks',
  })
  @ApiCreatedResponse({ type: CreateTasksResponseDto })
  @ApiBadRequestResponse(VALIDATION_FAILED_API_RESPONSE_OPTIONS)
  createTodo(
    @Body() body: CreateTasksRequestDto,
  ): Promise<CreateTasksResponseDto> {
    return this.taskService.createTasks(body);
  }

  @Put(':taskId')
  @ApiOperation({
    description: 'Update a task',
  })
  @ApiParam(TASK_ID_API_PARAM_OPTIONS)
  @ApiOkResponse({ type: UpdateTaskResponseDto })
  @ApiBadRequestResponse(VALIDATION_FAILED_API_RESPONSE_OPTIONS)
  @ApiNotFoundResponse(TASK_NOT_FOUND_API_RESPONSE_OPTIONS)
  async updateTask(
    @Param('taskId') taskId: string,
    @Body() body: UpdateTaskRequestDto,
  ): Promise<UpdateTaskResponseDto> {
    return {};
  }

  @Delete(':taskId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    description: 'Delete a task',
  })
  @ApiNoContentResponse()
  @ApiParam(TASK_ID_API_PARAM_OPTIONS)
  @ApiNotFoundResponse(TASK_NOT_FOUND_API_RESPONSE_OPTIONS)
  async deleteTask(@Param('taskId') taskId: string) {}
}
