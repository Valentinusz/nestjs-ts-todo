import { TODO_TITLE_CONSTANTS } from '@/todo/todo-openapi.consants';
import { defineCustomApiProperty } from '@/util/defineCustomApiProperty';

export const ApiTodoTitlePropertyDecorator = defineCustomApiProperty({
  example: TODO_TITLE_CONSTANTS.EXAMPLE,
  maxLength: TODO_TITLE_CONSTANTS.MAX_LENGTH
});

