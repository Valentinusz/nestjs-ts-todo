import { Module } from '@nestjs/common';
import { PrismaModule } from '@/persistence/prisma.module';
import { UserTaskController } from '@/user-task/user-task.controller';
import { UserTaskService } from '@/user-task/user-task.service';

@Module({
  controllers: [UserTaskController],
  providers: [UserTaskService],
  imports: [PrismaModule]
})
export class UserTaskModule {}
