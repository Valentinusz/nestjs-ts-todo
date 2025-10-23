import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@/persistence/prisma.module';
import { TaskCollectionModule } from '@/task-collection/task-collection.module';
import { TodoModule } from '@/todo/todo.module';
import { UsersModule } from '@/user/user.module';
import { UserTaskCollectionModule } from '@/user-task-collection/user-task-collection.module';
import { UserTodoModule } from '@/user-todo/user-todo.module';

@Module({
  imports: [ConfigModule.forRoot(), TaskCollectionModule, TodoModule, UsersModule, UserTodoModule, UserTaskCollectionModule, PrismaModule]
})
export class AppModule {
}
