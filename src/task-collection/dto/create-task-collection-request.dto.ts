import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';
import { TASK_COLLECTION_DETAILS_MAX_LENGTH, TASK_COLLECTION_TITLE_MAX_LENGTH } from '@/task-collection/task-collection.constants';

export class CreateTaskCollectionRequestDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  @MaxLength(TASK_COLLECTION_TITLE_MAX_LENGTH)
  title: string

  @ApiProperty()
  @MaxLength(TASK_COLLECTION_DETAILS_MAX_LENGTH)
  details: string
}
