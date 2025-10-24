import { ApiProperty } from '@nestjs/swagger';
import {
  TASK_DETAILS_API_PROPERTY_OPTIONS,
  TASK_ID_API_PROPERTY_OPTIONS,
  TASK_TITLE_API_PROPERTY_OPTIONS,
} from '@/task/task.openapi.constants';

export class CreateTaskResponseDto {
  @ApiProperty(TASK_ID_API_PROPERTY_OPTIONS)
  id: string;

  @ApiProperty(TASK_TITLE_API_PROPERTY_OPTIONS)
  title: string;

  @ApiProperty(TASK_DETAILS_API_PROPERTY_OPTIONS)
  details: string;
}
