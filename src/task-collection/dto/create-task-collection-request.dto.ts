import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';
import {
  TASK_COLLECTION_DETAILS_MAX_LENGTH,
  TASK_COLLECTION_TITLE_MAX_LENGTH,
} from '@/task-collection/task-collection.constants';
import {
  TASK_COLLECTION_DETAILS_API_PROPERTY_OPTIONS,
  TASK_COLLECTION_TITLE_API_PROPERTY_OPTIONS,
} from '@/task-collection/task-collection.openapi.constants';
import { USER_ID_API_PROPERTY_OPTIONS } from '@/user/user-openapi.constants';

export class CreateTaskCollectionRequestDto {
  @ApiProperty(USER_ID_API_PROPERTY_OPTIONS)
  userId: string;

  @ApiProperty(TASK_COLLECTION_TITLE_API_PROPERTY_OPTIONS)
  @MaxLength(TASK_COLLECTION_TITLE_MAX_LENGTH)
  title: string;

  @ApiProperty(TASK_COLLECTION_DETAILS_API_PROPERTY_OPTIONS)
  @MaxLength(TASK_COLLECTION_DETAILS_MAX_LENGTH)
  details: string;
}
