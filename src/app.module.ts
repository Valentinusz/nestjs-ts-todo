import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@/persistence/prisma.module';
import { TodoModule } from '@/todo/todo.module';
import { UserTodoModule } from '@/user-todo/user-todo.module';

@Module({
  imports: [ConfigModule.forRoot(), TodoModule, UserTodoModule, PrismaModule],
})
export class AppModule {}
