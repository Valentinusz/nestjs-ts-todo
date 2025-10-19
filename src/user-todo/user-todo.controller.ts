import { Controller, Get, Param } from '@nestjs/common';
import type { GetTodosOfUserResponseDto } from '@/user-todo/dto/get-todos-of-user-response.dto';
import { UserTodoService } from '@/user-todo/user-todo.service';

@Controller('users/:userId/todos')
export class UserTodoController {
  constructor(private userTodoService: UserTodoService) {}

  @Get()
  getTodosOfUser(
    @Param('userId') userId: string,
  ): Promise<GetTodosOfUserResponseDto> {
    return this.userTodoService.findTodosOfUser();
  }
}
