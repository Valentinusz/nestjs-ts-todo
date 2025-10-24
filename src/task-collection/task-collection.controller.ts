import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiParam,
} from '@nestjs/swagger';
import { idApiPropertyOptions } from '@/id/decorator/ApiIdProperty';

@Controller('task-collections')
export class TaskCollectionController {
  constructor() {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse()
  async createTaskCollection() {}

  @Delete(':taskCollectionId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse()
  @ApiParam({ name: 'taskCollectionId', ...idApiPropertyOptions })
  async deleteTaskCollection(
    @Param('taskCollectionId')
    taskCollectionId: string,
  ) {}
}
