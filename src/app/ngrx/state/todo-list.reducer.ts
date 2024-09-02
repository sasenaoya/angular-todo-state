import { createReducer, on } from '@ngrx/store';
import { TodoListActions } from './todo-list.actions';

import { ITodo } from '../../todo/todo.model';

export const initialState: ITodo[] = [];

export const todoListReducer = createReducer(
  initialState,
  on(TodoListActions.addTodo, (state, { todo }) => [...state, todo]),
  on(TodoListActions.removeTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
);
