import { ApiProperty } from '@nestjs/swagger';

export class TaskOfUserDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  details: string;
}
