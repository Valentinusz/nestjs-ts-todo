import { ApiProperty } from '@nestjs/swagger';
import { createdAtApiPropertyOptions } from '@/audit/audit-openapi.constants';
import { userIdApiPropertyOptions } from '@/user/user-openapi.constants';

export class UserDto {
  @ApiProperty(userIdApiPropertyOptions)
  id: string;

  @ApiProperty(createdAtApiPropertyOptions)
  createdAt: Date;
}
