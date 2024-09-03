// Angular
import { Component } from '@angular/core';

// Todo
import { ITodo } from '../../todo/todo.model';
import { TodoDialogService } from '../../todo/todo-dialog/todo-dialog.service';

// State
import { addTodo, removeTodo, todoList$, updateTodo } from '../state/todo-list.repository';

@Component({
  selector: 'app-elf-todo-list',
  templateUrl: './elf-todo-list.component.html',
  styleUrl: './elf-todo-list.component.scss'
})
export class ElfTodoListComponent {
  todoList$ = todoList$;

  constructor(
    private todoDialogService: TodoDialogService,
  ) { }

  onAddTodo() {
    this.todoDialogService.show().afterClosed().subscribe((todo: ITodo) => {
      if (todo) {
        addTodo(todo);
      }
    });
  }

  onEditTodo(todo: ITodo) {
    this.todoDialogService.show(todo).afterClosed().subscribe((todo: ITodo) => {
      if (todo) {
        updateTodo(todo);
      }
    });
  }

  onRemoveTodo(todo: ITodo) {
    removeTodo(todo.id!);
  }
}
