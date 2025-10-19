import { Module } from '@nestjs/common';
import { PrismaModule } from '@/persistence/prisma.module';
import { TodoController } from '@/todo/todo.controller';
import { TodoService } from '@/todo/todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports: [PrismaModule]
})
export class TodoModule {}
