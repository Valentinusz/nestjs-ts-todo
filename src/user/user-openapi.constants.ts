import type { ApiPropertyOptions } from '@nestjs/swagger';
import { idApiPropertyOptions } from '@/id/decorator/ApiIdProperty';

export const userIdApiPropertyOptions = {
  ...idApiPropertyOptions,
  description: 'Id of the user'
} satisfies ApiPropertyOptions;
