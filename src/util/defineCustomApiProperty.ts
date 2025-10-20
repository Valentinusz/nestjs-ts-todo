import { applyDecorators } from '@nestjs/common';
import type { ApiPropertyOptions } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';

export type DefineCustomApiPropertyReturn<T = ApiPropertyOptions> = (options?: T) => PropertyDecorator;

export function defineCustomApiProperty<T = ApiPropertyOptions>(defaultOptions: T): DefineCustomApiPropertyReturn {
  return (options) => {
    if (!options) {
      return ApiProperty(options);
    }

    return applyDecorators(
      ApiProperty({ ...options, ...defaultOptions })
    );
  };
}
