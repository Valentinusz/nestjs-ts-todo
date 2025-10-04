import { MaxLength } from 'class-validator';

export class CreateTodoRequestDto {
  @MaxLength(255)
  text: string;
}
