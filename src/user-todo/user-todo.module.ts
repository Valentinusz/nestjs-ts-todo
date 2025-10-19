import { Module } from '@nestjs/common';
import { PrismaModule } from '@/persistence/prisma.module';
import { UserTodoController } from '@/user-todo/user-todo.controller';
import { UserTodoService } from '@/user-todo/user-todo.service';

@Module({
  controllers: [UserTodoController],
  providers: [UserTodoService],
  imports: [PrismaModule]
})
export class UserTodoModule {}
