import { inject, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

// TODO
import { ITodo } from '../../todo/todo.model';

// state
import { AddTodo, RemoveTodo, UpdateTodo } from './todo-list.actions';
import { TodoListState } from './todo-list.state';

@Injectable({
  providedIn: 'root'
})
export class TodoListFacadeService {
  private store = inject(Store);
  
  todoList$ = this.store.select(TodoListState.getTodoList);
  todoList = this.store.selectSignal(TodoListState.getTodoList);

  addTodo(todo: ITodo) {
    this.store.dispatch(new AddTodo(todo));
  }

  updateTodo(todo: ITodo) {
    this.store.dispatch(new UpdateTodo(todo));
  }

  removedTodo(id: string) {
    this.store.dispatch(new RemoveTodo(id));
  }
}
