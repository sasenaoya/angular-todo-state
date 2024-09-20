import { createActionGroup, props } from '@ngrx/store';
import { ITodo } from '../../../todo/todo.model';

export const TodoListActions = createActionGroup({
  source: 'TodoList',
  events: {
    'Add Todo': props<{ todo: ITodo }>(),
    'Update Todo': props<{ todo: ITodo }>(),
    'Remove Todo': props<{ id: string }>(),
  },
});
