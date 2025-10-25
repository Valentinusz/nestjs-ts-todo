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
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { CreateTaskCollectionRequestDto } from '@/task-collection/dto/create-task-collection-request.dto';
import { CreateTaskCollectionResponseDto } from '@/task-collection/dto/create-task-collection-response.dto';
import { UpdateTaskCollectionRequestDto } from '@/task-collection/dto/update-task-collection-request.dto';
import { UpdateTaskCollectionResponseDto } from '@/task-collection/dto/update-task-collection-response.dto';
import { TaskCollectionService } from '@/task-collection/task-collection.service';
import { USER_NOT_FOUND_API_RESPONSE_OPTIONS } from '@/user/user-openapi.constants';

@Controller('task-collections')
export class TaskCollectionController {
  constructor(private readonly taskCollectionService: TaskCollectionService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse()
  @ApiNotFoundResponse(USER_NOT_FOUND_API_RESPONSE_OPTIONS)
  async createTaskCollection(
    @Body() body: CreateTaskCollectionRequestDto,
  ): Promise<CreateTaskCollectionResponseDto> {
    return await this.taskCollectionService.createTaskCollection(body);
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
