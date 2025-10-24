import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';
import {
  TASK_DETAILS_API_PROPERTY_OPTIONS,
  TASK_TITLE_API_PROPERTY_OPTIONS,
} from '@/task/task.openapi.constants';

export class CreateTaskRequestDto {
  @ApiProperty(TASK_TITLE_API_PROPERTY_OPTIONS)
  @IsString()
  @MaxLength(1023)
  title: string;

  @ApiProperty(TASK_DETAILS_API_PROPERTY_OPTIONS)
  @IsOptional()
  @IsString()
  @MaxLength(4095)
  details: string;
}
