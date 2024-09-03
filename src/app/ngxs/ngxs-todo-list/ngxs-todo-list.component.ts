import { Component } from '@angular/core';

// TODO
import { ITodo } from '../../todo/todo.model';
import { TodoDialogService } from '../../todo/todo-dialog/todo-dialog.service';

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
    private todoDialogService: TodoDialogService,
  ) {
    this.todoList$ = this.todoListFacadeService.todoList$;
    this.todoList = this.todoListFacadeService.todoList;
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
