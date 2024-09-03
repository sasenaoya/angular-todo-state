import { createReducer, on } from '@ngrx/store';
import { TodoListActions } from './todo-list.actions';

import { ITodo } from '../../todo/todo.model';

export const initialState: ITodo[] = [
  { id: "1", name: 'Buy milk' },
  { id: "2", name: 'Buy eggs' },
];

export const todoListReducer = createReducer(
  initialState,
  on(TodoListActions.addTodo, (state, { todo }) => [...state, todo]),
  on(TodoListActions.updateTodo, (state, { todo }) => state.map(t => t.id === todo.id ? todo : t)),
  on(TodoListActions.removeTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
);
