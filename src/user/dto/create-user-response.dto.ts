import { ApiProperty } from '@nestjs/swagger';
import { CREATED_AT_API_PROPERTY_OPTIONS } from '@/audit/audit.openapi.constants';
import { USER_ID_API_PROPERTY_OPTIONS } from '@/user/user-openapi.constants';

export class CreateUserResponseDto {
  @ApiProperty(USER_ID_API_PROPERTY_OPTIONS)
  id: string;

  @ApiProperty(CREATED_AT_API_PROPERTY_OPTIONS)
  createdAt: Date;
}
