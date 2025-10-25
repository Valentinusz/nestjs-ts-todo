import type { ApiPropertyOptions } from '@nestjs/swagger';

export const CREATED_AT_API_PROPERTY_OPTIONS = {
  description: 'Time the resource as created at'
} as const satisfies ApiPropertyOptions;

export const DELETED_AT_API_PROPERTY_OPTIONS = {
  description: 'Time the resource was marked for deletion at'
} as const satisfies ApiPropertyOptions;
