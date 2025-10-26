import type { ApiResponseOptions } from '@nestjs/swagger';
import { ErrorResponseDto } from '@/openapi/error-response.dto';

export const VALIDATION_FAILED_API_RESPONSE_OPTIONS = {
  type: ErrorResponseDto,
  description: 'Request body failed validation'
} as const satisfies ApiResponseOptions;

export const NO_LOGIN_API_RESPONSE_OPTIONS = {
  type: ErrorResponseDto,
  description: 'No login'
} as const satisfies ApiResponseOptions;
