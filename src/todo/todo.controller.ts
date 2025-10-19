import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateTodosRequestDto } from '@/todo/dto/create-todos-request.dto';
import { CreateTodosResponseDto } from '@/todo/dto/create-todos-response.dto';
import { TodoService } from '@/todo/todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @HttpCode(201)
  createTodo(
    @Body() body: CreateTodosRequestDto,
  ): Promise<CreateTodosResponseDto> {
    return this.todoService.createTodos(body);
  }
}
