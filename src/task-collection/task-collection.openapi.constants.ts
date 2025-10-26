import type { ApiPropertyOptions } from '@nestjs/swagger';
import { ID_API_PROPERTY_OPTIONS } from '@/openapi/id.openapi.constants';
import {
  TASK_COLLECTION_DETAILS_MAX_LENGTH,
  TASK_COLLECTION_TITLE_MAX_LENGTH,
} from '@/task-collection/task-collection.constants';

export const TASK_COLLECTION_ID_API_PROPERTY_OPTIONS = {
  ...ID_API_PROPERTY_OPTIONS,
  description: 'Id of the task collection',
} as const satisfies ApiPropertyOptions;

export const TASK_COLLECTION_TITLE_API_PROPERTY_OPTIONS = {
  description: 'Name of the task collection',
  example: 'Party groceries',
  maxLength: TASK_COLLECTION_TITLE_MAX_LENGTH,
} as const satisfies ApiPropertyOptions;

export const TASK_COLLECTION_DETAILS_API_PROPERTY_OPTIONS = {
  description: 'Description of the task collection',
  example: 'List of things for the party on 08/20',
  maxLength: TASK_COLLECTION_DETAILS_MAX_LENGTH,
} as const satisfies ApiPropertyOptions;
