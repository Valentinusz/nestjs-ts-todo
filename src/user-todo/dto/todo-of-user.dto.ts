import { ApiProperty } from '@nestjs/swagger';

export class TodoOfUserDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  details: string;
}
