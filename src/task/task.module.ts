import { Module } from '@nestjs/common';
import { PrismaModule } from '@/persistence/prisma.module';
import { TaskController } from '@/task/task.controller';
import { TaskService } from '@/task/task.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [PrismaModule]
})
export class TaskModule {}
