import { Injectable } from '@nestjs/common';
import { Todo } from '@generated/prisma';

@Injectable()
export class UserTodoService {
  private todos: Todo[];

  findAll() {
    return this.todos;
  }
}
