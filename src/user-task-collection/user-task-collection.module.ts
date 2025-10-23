import { Module } from '@nestjs/common';
import { PrismaModule } from '@/persistence/prisma.module';
import { UserTaskCollectionController } from '@/user-task-collection/user-task-collection.controller';
import { UserTaskCollectionService } from '@/user-task-collection/user-task-collection.service';

@Module({
  controllers: [UserTaskCollectionController],
  providers: [UserTaskCollectionService],
  imports: [PrismaModule]
})
export class UserTaskCollectionModule {

}
