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
import { ApiCreatedResponse, ApiNoContentResponse } from '@nestjs/swagger';
import { CreateTaskCollectionRequestDto } from '@/task-collection/dto/create-task-collection-request.dto';
import { CreateTaskCollectionResponseDto } from '@/task-collection/dto/create-task-collection-response.dto';
import { UpdateTaskCollectionRequestDto } from '@/task-collection/dto/update-task-collection-request.dto';
import { UpdateTaskCollectionResponseDto } from '@/task-collection/dto/update-task-collection-response.dto';
import {
  TASK_COLLECTION_ID_PARAM_NAME,
  TASK_COLLECTION_ID_PATH_PARAM,
  TASK_COLLECTION_RESOURCE_NAME,
} from '@/task-collection/task-collection.routing.constants';

@Controller(TASK_COLLECTION_RESOURCE_NAME)
export class TaskCollectionController {
  constructor() {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse()
  async createTaskCollection(
    @Body() body: CreateTaskCollectionRequestDto,
  ): Promise<CreateTaskCollectionResponseDto> {
    return {};
  }

  @Put()
  async updateTaskCollection(
    @Param(TASK_COLLECTION_ID_PARAM_NAME) taskCollectionId: string,
    @Body() body: UpdateTaskCollectionRequestDto,
  ): Promise<UpdateTaskCollectionResponseDto> {
    return {};
  }

  @Delete(TASK_COLLECTION_ID_PATH_PARAM)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse()
  async deleteTaskCollection(
    @Param(TASK_COLLECTION_ID_PARAM_NAME) taskCollectionId: string,
  ) {}
}
