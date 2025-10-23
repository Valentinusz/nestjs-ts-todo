import { Module } from '@nestjs/common';
import { PrismaModule } from '@/persistence/prisma.module';
import { TaskCollectionController } from '@/task-collection/task-collection.controller';
import { TaskCollectionService } from '@/task-collection/task-collection.service';

@Module({
  controllers: [TaskCollectionController],
  providers: [TaskCollectionService],
  imports: [PrismaModule]
})
export class TaskCollectionModule {

}
