import { Module } from '@nestjs/common';
import { AuditModule } from '@/audit/audit.module';
import { PrismaModule } from '@/persistence/prisma.module';
import { TaskCollectionController } from '@/task-collection/task-collection.controller';
import { TaskCollectionService } from '@/task-collection/task-collection.service';
import { UserModule } from '@/user/user.module';

@Module({
  controllers: [TaskCollectionController],
  providers: [TaskCollectionService],
  imports: [AuditModule, PrismaModule, UserModule],
})
export class TaskCollectionModule {}
