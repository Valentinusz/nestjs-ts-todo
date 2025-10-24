import type { ApiPropertyOptions } from '@nestjs/swagger';
import { ID_API_PROPERTY_OPTIONS } from '@/id/id.openapi.constants';

export const USER_ID_API_PROPERTY_OPTIONS = {
  ...ID_API_PROPERTY_OPTIONS,
  description: 'Id of the user',
} as const satisfies ApiPropertyOptions;
