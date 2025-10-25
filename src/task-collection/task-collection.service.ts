import { Injectable } from '@nestjs/common';
import { ulid } from 'ulid';
import { AuditMapperService } from '@/audit/audit-mapper.service';
import { PrismaService } from '@/persistence/prisma.service';
import { CreateTaskCollectionRequestDto } from '@/task-collection/dto/create-task-collection-request.dto';
import { CreateTaskCollectionResponseDto } from '@/task-collection/dto/create-task-collection-response.dto';
import { UserExistenceService } from '@/user/user-existence.service';

@Injectable()
export class TaskCollectionService {
  constructor(
    private readonly userExistenceService: UserExistenceService,
    private readonly auditMapper: AuditMapperService,
    private readonly prismaService: PrismaService,
  ) {}

  async createTaskCollection(
    request: CreateTaskCollectionRequestDto,
  ): Promise<CreateTaskCollectionResponseDto> {
    await this.userExistenceService.assertExistsById(request.userId);

    const taskCollection = await this.prismaService.taskCollection.create({
      data: {
        id: ulid(),
        title: request.title,
        details: request.details,
        createdById: request.userId,
      },
      select: {
        id: true,
        title: true,
        details: true,
        createdAt: true,
        createdById: true,
      },
    });

    return {
      id: taskCollection.id,
      title: taskCollection.title ?? undefined,
      details: taskCollection.details ?? undefined,
      creationAudit: this.auditMapper.toCreationAuditDto(taskCollection),
    };
  }
}
