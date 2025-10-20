import { TODO_DETAILS_MAX_LENGTH, TODO_TITLE_MAX_LENGTH } from '@/todo/todo.constants';

export const TODO_TITLE_CONSTANTS = {
  EXAMPLE: 'Example TODO',
  MAX_LENGTH: TODO_TITLE_MAX_LENGTH
} as const;

export const TODO_DETAILS_CONSTANTS = {
  EXAMPLE: 'Example TODO details',
  MAX_LENGTH: TODO_DETAILS_MAX_LENGTH
} as const;
