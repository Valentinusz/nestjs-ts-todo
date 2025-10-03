import { Controller } from '@nestjs/common';
import { TodoService } from '@/todo/todo.service';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
}
