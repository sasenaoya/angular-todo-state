import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { TodoListActions } from './todo-list.actions';
import { selectTodoList } from './todo-list.selectors';

import { ITodo } from '../../../todo/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListFacadeService {
  private store = inject(Store);
  
  todoList$ = this.store.select(selectTodoList);

  constructor() {}

  addTodo(todo: ITodo) {
    this.store.dispatch(TodoListActions.addTodo({ todo }));
  }

  updateTodo(todo: ITodo) {
    this.store.dispatch(TodoListActions.updateTodo({ todo }));
  }

  removedTodo(id: string) {
    this.store.dispatch(TodoListActions.removeTodo({ id }));
  }
}
