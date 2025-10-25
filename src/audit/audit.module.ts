import { Module } from '@nestjs/common';
import { AuditMapperService } from '@/audit/audit-mapper.service';

@Module({
  providers: [AuditMapperService],
  exports: [AuditMapperService]
})
export class AuditModule {}
