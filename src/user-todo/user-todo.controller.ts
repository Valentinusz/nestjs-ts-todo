import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import type { CreateTodoRequestDto } from '@/user-todo/dto/create-todo-request.dto';
import type { GetTodosOfUserResponseDto } from '@/user-todo/dto/get-todos-of-user-response.dto';
import { UserTodoService } from '@/user-todo/user-todo.service';

@Controller('users/{userId}/todos')
export class UserTodoController {
  constructor(private userTodoService: UserTodoService) {}

  @Get()
  getTodosOfUser(): GetTodosOfUserResponseDto {
    return {
      data: this.userTodoService.findAll(),
    };
  }

  @Post()
  @HttpCode(201)
  createTodo(
    @Param('userId') userId: number,
    @Body() body: CreateTodoRequestDto,
  ) {}
}
