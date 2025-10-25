import { Injectable } from '@nestjs/common';
import { CreationAuditDto } from '@/audit/dto/creation-audit.dto';

export interface ToCreationAuditDtoOptions {
  createdAt: Date;
  createdById: string;
}

@Injectable()
export class AuditMapperService {
  constructor() {}

  toCreationAuditDto({
    createdAt,
    createdById,
  }: ToCreationAuditDtoOptions): CreationAuditDto {
    return {
      createdAt,
      createdBy: createdById,
    };
  }
}
