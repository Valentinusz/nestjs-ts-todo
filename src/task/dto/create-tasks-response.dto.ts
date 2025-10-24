import { ApiProperty } from '@nestjs/swagger';
import { CreateTaskResponseDto } from '@/task/dto/create-task-response.dto';

export class CreateTasksResponseDto {
  @ApiProperty({ type: [CreateTaskResponseDto] })
  todos: CreateTaskResponseDto[];
}
