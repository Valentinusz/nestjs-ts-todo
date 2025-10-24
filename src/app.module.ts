import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@/persistence/prisma.module';
import { TaskCollectionModule } from '@/task-collection/task-collection.module';
import { TaskModule } from '@/task/task.module';
import { UsersModule } from '@/user/user.module';
import { UserTaskCollectionModule } from '@/user-task-collection/user-task-collection.module';
import { UserTaskModule } from '@/user-task/user-task.module';

@Module({
  imports: [ConfigModule.forRoot(), TaskCollectionModule, TaskModule, UsersModule, UserTaskModule, UserTaskCollectionModule, PrismaModule]
})
export class AppModule {
}
