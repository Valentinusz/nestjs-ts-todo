import { Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('task-collections')
export class TaskCollectionController {
  constructor() {
  }

  @Post()
  @ApiCreatedResponse()
  async createTaskCollection() {

  }
}
