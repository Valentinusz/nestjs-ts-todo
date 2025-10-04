import { Module } from '@nestjs/common';
import { UserTodoController } from '@/user-todo/user-todo.controller';
import { UserTodoService } from '@/user-todo/user-todo.service';

@Module({
  controllers: [UserTodoController],
  providers: [UserTodoService],
})
export class UserTodoModule {}
