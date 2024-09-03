import { Component } from '@angular/core';

// TODO
import { ITodo } from '../../todo/todo.model';

// TODO facade
import { TodoListFacadeService } from '../state/todo-list.facade.service';

@Component({
  selector: 'app-ngrx-todo-list',
  templateUrl: './ngrx-todo-list.component.html',
  styleUrl: './ngrx-todo-list.component.scss'
})
export class NgrxTodoListComponent {
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
