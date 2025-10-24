import { ApiProperty } from '@nestjs/swagger';
import { createdAtApiPropertyOptions } from '@/audit/audit-openapi.constants';
import { USER_ID_API_PROPERTY_OPTIONS } from '@/user/user-openapi.constants';

export class UserDto {
  @ApiProperty(USER_ID_API_PROPERTY_OPTIONS)
  id: string;

  @ApiProperty(createdAtApiPropertyOptions)
  createdAt: Date;
}
