import type { ApiParamOptions, ApiPropertyOptions } from '@nestjs/swagger';

export const ID_API_EXAMPLE = 'EXAMPLE_IDENTIFIER_NO_0001';

export const ID_API_PROPERTY_OPTIONS = {
  example: ID_API_EXAMPLE,
} as const satisfies ApiPropertyOptions;

export const ID_API_PARAM_OPTIONS = {
  example: ID_API_EXAMPLE,
  name: ''
} as const satisfies ApiParamOptions;
