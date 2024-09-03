import { Component } from '@angular/core';

// TODO
import { ITodo } from '../../todo/todo.model';

// state
import { TodoListFacadeService } from '../state/todo-list.facade.service';

@Component({
  selector: 'app-ngxs-todo-list',
  templateUrl: './ngxs-todo-list.component.html',
  styleUrl: './ngxs-todo-list.component.scss'
})
export class NgxsTodoListComponent {
  todoList$;
  todoList;

  constructor(
    private todoListFacadeService: TodoListFacadeService,
  ) {
    this.todoList$ = this.todoListFacadeService.todoList$;
    this.todoList = this.todoListFacadeService.todoList;
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
