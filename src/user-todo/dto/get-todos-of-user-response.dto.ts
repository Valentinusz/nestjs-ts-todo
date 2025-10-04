import { ApiProperty } from '@nestjs/swagger';

export class TodoOfUserDto {
  @ApiProperty()
  text: string;
}

export class GetTodosOfUserResponseDto {
  data: TodoOfUserDto[];
}
