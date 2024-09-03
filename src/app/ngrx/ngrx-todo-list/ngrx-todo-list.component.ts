import { Component } from '@angular/core';

// TODO
import { ITodo } from '../../todo/todo.model';
import { TodoDialogService } from '../../todo/todo-dialog/todo-dialog.service';

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
    private todoDialogService: TodoDialogService,
  ) {
    this.todoList$ = todoListFacadeService.todoList$;
  }

  onAddTodo() {
    this.todoDialogService.show().afterClosed().subscribe((todo: ITodo) => {
      if (todo) {
        this.todoListFacadeService.addTodo(todo);
      }
    });
  }

  onEditTodo(todo: ITodo) {
    this.todoDialogService.show(todo).afterClosed().subscribe((todo: ITodo) => {
      if (todo) {
        this.todoListFacadeService.updateTodo(todo);
      }
    });
  }

  onRemoveTodo(todo: ITodo) {
    this.todoListFacadeService.removedTodo(todo.id!);
  }
}
