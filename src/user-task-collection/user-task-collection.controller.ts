import { Controller, Get } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('user/:userId/task-collections')
export class UserTaskCollectionController {
  constructor() {
  }

  @Get()
  @ApiCreatedResponse()
  async getTaskCollectionsOfUser() {

  }
}
