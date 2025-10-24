import type { ApiParamOptions, ApiPropertyOptions } from '@nestjs/swagger';
import { ID_API_PROPERTY_OPTIONS } from '@/id/id.openapi.constants';
import { TODO_TITLE_MAX_LENGTH } from '@/task/task.constants';

export const TASK_ID_API_PROPERTY_OPTIONS = {
  ...ID_API_PROPERTY_OPTIONS,
} as const satisfies ApiPropertyOptions;

export const TASK_ID_API_PARAM_OPTIONS = {
  name: 'taskId',
  ...TASK_ID_API_PROPERTY_OPTIONS,
} as const satisfies ApiParamOptions;

export const TASK_TITLE_API_PROPERTY_OPTIONS = {
  example: 'Example task',
  maxLength: TODO_TITLE_MAX_LENGTH,
} as const satisfies ApiPropertyOptions;

export const TASK_DETAILS_API_PROPERTY_OPTIONS = {
  example: 'Example details',
} as const satisfies ApiPropertyOptions;
