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

@Controller('task-collections')
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

  @Put(':taskCollectionId')
  async updateTaskCollection(
    @Param('taskCollectionId') taskCollectionId: string,
    @Body() body: UpdateTaskCollectionRequestDto,
  ): Promise<UpdateTaskCollectionResponseDto> {
    return {};
  }

  @Delete(':taskCollectionId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse()
  async deleteTaskCollection(
    @Param('taskCollectionId') taskCollectionId: string,
  ) {}
}
