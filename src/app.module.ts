import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from '@/todo/todo.module';
import { UserTodoModule } from '@/user-todo/user-todo.module';

@Module({
  imports: [ConfigModule.forRoot(), TodoModule, UserTodoModule],
})
export class AppModule {}
