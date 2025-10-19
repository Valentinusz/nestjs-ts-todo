import { ApiProperty } from '@nestjs/swagger';
import { TodoOfUserDto } from '@/user-todo/dto/todo-of-user.dto';

export class GetTodosOfUserResponseDto {
  @ApiProperty({ type: [TodoOfUserDto] })
  data: TodoOfUserDto[];
}
