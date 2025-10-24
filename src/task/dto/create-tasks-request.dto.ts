import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty } from 'class-validator';
import { CreateTaskRequestDto } from '@/task/dto/create-task-request.dto';

export class CreateTasksRequestDto {
  @ApiProperty({type: [CreateTaskRequestDto]})
  @ArrayNotEmpty()
  tasks: CreateTaskRequestDto[];
}
