import { ApiProperty } from '@nestjs/swagger';
import {
  CREATED_AT_API_PROPERTY_OPTIONS,
  DELETED_AT_API_PROPERTY_OPTIONS,
} from '@/audit/audit.openapi.constants';

export class UserDto {
  @ApiProperty(CREATED_AT_API_PROPERTY_OPTIONS)
  createdAt: Date;

  @ApiProperty(DELETED_AT_API_PROPERTY_OPTIONS)
  deletedAt?: Date;
}
