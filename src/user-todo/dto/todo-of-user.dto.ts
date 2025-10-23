import { ApiProperty } from '@nestjs/swagger';
import { TODO_DETAILS_CONSTANTS, TODO_TITLE_CONSTANTS } from '@/todo/todo-openapi.consants';
import { ApiTodoTitlePropertyDecorator } from '@/todo/decorator/ApiTodoTitleProperty.decorator';

export class TodoOfUserDto {
  @ApiTodoTitlePropertyDecorator()
  title: string;

  @ApiProperty({ example: TODO_DETAILS_CONSTANTS.EXAMPLE, maxLength: TODO_DETAILS_CONSTANTS.MAX_LENGTH })
  details: string;
}
