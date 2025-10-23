import type { ApiPropertyOptions } from '@nestjs/swagger';

export const createdAtApiPropertyOptions = {
  description: 'Time the resource as created at'
} satisfies ApiPropertyOptions;
