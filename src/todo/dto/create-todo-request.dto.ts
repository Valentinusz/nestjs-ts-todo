import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateTodoRequestDto {
  @ApiProperty({ example: 'Example title' })
  @IsString()
  @MaxLength(1023)
  title: string;

  @ApiProperty({ example: 'Example details' })
  @IsOptional()
  @IsString()
  @MaxLength(4095)
  details: string;
}
