import { ApiProperty } from '@nestjs/swagger';
import { CreationAuditDto } from '@/audit/dto/creation-audit.dto';
import {
  TASK_COLLECTION_DETAILS_API_PROPERTY_OPTIONS,
  TASK_COLLECTION_ID_API_PROPERTY_OPTIONS,
  TASK_COLLECTION_TITLE_API_PROPERTY_OPTIONS,
} from '@/task-collection/task-collection.openapi.constants';

export class CreateTaskCollectionResponseDto {
  @ApiProperty(TASK_COLLECTION_ID_API_PROPERTY_OPTIONS)
  id: string;

  @ApiProperty(TASK_COLLECTION_TITLE_API_PROPERTY_OPTIONS)
  title?: string;

  @ApiProperty(TASK_COLLECTION_DETAILS_API_PROPERTY_OPTIONS)
  details?: string;

  creationAudit: CreationAuditDto;
}
