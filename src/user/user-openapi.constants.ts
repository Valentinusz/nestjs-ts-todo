import type { ApiParamOptions, ApiPropertyOptions } from '@nestjs/swagger';
import {
  ID_API_PARAM_OPTIONS,
  ID_API_PROPERTY_OPTIONS,
} from '@/id/id.openapi.constants';

export const USER_API_DESCRIPTION_EXAMPLE = 'Id of the user';

export const USER_ID_API_PROPERTY_OPTIONS = {
  ...ID_API_PROPERTY_OPTIONS,
  description: USER_API_DESCRIPTION_EXAMPLE,
} as const satisfies ApiPropertyOptions;

export const USER_ID_API_PARAM_OPTIONS = {
  ...ID_API_PARAM_OPTIONS,
  description: USER_API_DESCRIPTION_EXAMPLE,
  name: 'userId',
} as const satisfies ApiParamOptions;
