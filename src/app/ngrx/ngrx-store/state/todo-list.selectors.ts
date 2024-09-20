import { createSelector, createFeatureSelector, State } from '@ngrx/store';
import { ITodo } from '../../../todo/todo.model';

interface ITodoListState {
  todoList: ITodo[];
}
export const todoListState = createFeatureSelector<ITodoListState>('TodoList');
export const selectTodoList = createSelector(todoListState, state => state.todoList);
