import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty } from 'class-validator';
import { CreateTodoRequestDto } from '@/todo/dto/create-todo-request.dto';

export class CreateTodosRequestDto {
  @ApiProperty({type: [CreateTodoRequestDto]})
  @ArrayNotEmpty()
  todos: CreateTodoRequestDto[];
}
