import { Component } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { TodoListState } from '../state/todo-list.store';

@Component({
  selector: 'app-ngrx-component-store-todo-list',
  templateUrl: './ngrx-component-store-todo-list.component.html',
  styleUrl: './ngrx-component-store-todo-list.component.scss',
  providers: [ComponentStore]
})
export class NgrxComponentStoreTodoListComponent {
  readonly todoList$;

  constructor(
    private readonly componentStore: ComponentStore<TodoListState>
  ) {
    this.todoList$ = this.componentStore.select(state => state.todoList);
  }
}
