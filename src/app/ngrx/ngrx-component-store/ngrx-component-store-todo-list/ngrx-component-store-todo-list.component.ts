import { Component } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

import { TodoListStore } from '../state/todo-list.store';
import { ITodo } from '../../../todo/todo.model';

@Component({
  selector: 'app-ngrx-component-store-todo-list',
  templateUrl: './ngrx-component-store-todo-list.component.html',
  styleUrl: './ngrx-component-store-todo-list.component.scss',
  providers: [ComponentStore, TodoListStore]
})
export class NgrxComponentStoreTodoListComponent {
  readonly todoList$;

  constructor(
    private readonly todoListStore: TodoListStore,
  ) {
    this.todoList$ = this.todoListStore.select(state => state.todoList);
  }

  onAddTodo(todo: ITodo) {
    this.todoListStore.addTodo(todo);
  }

  onUpdateTodo(todo: ITodo) {
    this.todoListStore.updateTodo(todo);
  }

  onRemoveTodo(todo: ITodo) {
    this.todoListStore.removeTodo(todo);
  }
}
