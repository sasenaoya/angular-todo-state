import { Component } from '@angular/core';

// TODO
import { ITodo } from '../../../todo/todo.model';

// TODO facade
import { TodoListFacadeService } from '../state/todo-list.facade.service';

@Component({
  selector: 'app-ngrx-store-todo-list',
  templateUrl: './ngrx-store-todo-list.component.html',
  styleUrl: './ngrx-store-todo-list.component.scss'
})
export class NgrxStoreTodoListComponent {
  todoList$;

  constructor(
    private todoListFacadeService: TodoListFacadeService,
  ) {
    this.todoList$ = todoListFacadeService.todoList$;
  }

  onAddTodo(todo: ITodo) {
    this.todoListFacadeService.addTodo(todo);
  }

  onUpdateTodo(todo: ITodo) {
    this.todoListFacadeService.updateTodo(todo);
  }

  onRemoveTodo(todo: ITodo) {
    this.todoListFacadeService.removedTodo(todo.id!);
  }
}
