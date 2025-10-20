import { ApiProperty } from '@nestjs/swagger';
import { CreateTodoResponseDto } from '@/todo/dto/create-todo-response.dto';

export class CreateTodosResponseDto {
  @ApiProperty({ type: [CreateTodoResponseDto] })
  todos: CreateTodoResponseDto[];
}
