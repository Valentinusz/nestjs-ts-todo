import { ApiProperty } from '@nestjs/swagger';
import { TaskOfUserDto } from '@/user-task/dto/task-of-user.dto';

export class GetTasksOfUserResponseDto {
  @ApiProperty({ type: [TaskOfUserDto] })
  data: TaskOfUserDto[];
}
