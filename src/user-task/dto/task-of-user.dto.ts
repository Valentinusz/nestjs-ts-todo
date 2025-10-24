import { ApiProperty } from '@nestjs/swagger';

export class TaskOfUserDto {
  @ApiProperty()
  title?: string | null;

  @ApiProperty()
  details?: string | null;
}
