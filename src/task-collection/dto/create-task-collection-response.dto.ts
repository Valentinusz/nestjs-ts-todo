import { ApiProperty } from '@nestjs/swagger';
import { CreationAuditDto } from '@/audit/dto/creation-audit.dto';

export class CreateTaskCollectionResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title?: string

  @ApiProperty()
  details?: string

  creationAudit: CreationAuditDto
}
