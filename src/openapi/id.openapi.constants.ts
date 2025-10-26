import type { ApiParamOptions, ApiPropertyOptions } from '@nestjs/swagger';

export const ID_API_OPTIONS = {
  example: 'EXAMPLE_IDENTIFIER_NO_0001',
  minLength: 26,
  maxLength: 26
} satisfies ApiPropertyOptions | ApiParamOptions;

export const ID_API_PROPERTY_OPTIONS = {
  ...ID_API_OPTIONS
} as const satisfies ApiPropertyOptions;

export const ID_API_PARAM_OPTIONS = {
  ...ID_API_OPTIONS,
  name: ''
} as const satisfies ApiParamOptions;
