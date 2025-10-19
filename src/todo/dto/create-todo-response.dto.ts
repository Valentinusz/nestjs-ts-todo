import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  details: string;
}
