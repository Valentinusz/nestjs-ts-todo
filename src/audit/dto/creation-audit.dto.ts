import { ApiProperty } from '@nestjs/swagger';

export class CreationAuditDto {
  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  createdBy: string;
}
