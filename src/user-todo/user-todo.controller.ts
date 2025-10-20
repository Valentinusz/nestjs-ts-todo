import { Controller, Get, Param } from '@nestjs/common';
import type { GetTodosOfUserResponseDto } from '@/user-todo/dto/get-todos-of-user-response.dto';
import { UserTodoService } from '@/user-todo/user-todo.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreateTodosResponseDto } from '@/todo/dto/create-todos-response.dto';

@Controller('users/:userId/todos')
export class UserTodoController {
  constructor(private userTodoService: UserTodoService) {}

  @Get()
  @ApiOkResponse({ type: CreateTodosResponseDto })
  getTodosOfUser(
    @Param('userId') userId: string,
  ): Promise<GetTodosOfUserResponseDto> {
    return this.userTodoService.findTodosOfUser();
  }
}
