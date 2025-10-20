import { ApiProperty } from '@nestjs/swagger';
import { TODO_DETAILS_CONSTANTS, TODO_TITLE_CONSTANTS } from '@/todo/todo-openapi.consants';
import { ApiTodoTitleProperty } from '@/todo/decorator/ApiTodoTitleProperty';

export class TodoOfUserDto {
  @ApiTodoTitleProperty()
  title: string;

  @ApiProperty({ example: TODO_DETAILS_CONSTANTS.EXAMPLE, maxLength: TODO_DETAILS_CONSTANTS.MAX_LENGTH })
  details: string;
}
