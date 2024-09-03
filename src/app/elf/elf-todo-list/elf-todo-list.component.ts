// Angular
import { Component } from '@angular/core';

// Todo
import { ITodo } from '../../todo/todo.model';

// State
import { addTodo, removeTodo, todoList$, updateTodo } from '../state/todo-list.repository';

@Component({
  selector: 'app-elf-todo-list',
  templateUrl: './elf-todo-list.component.html',
  styleUrl: './elf-todo-list.component.scss'
})
export class ElfTodoListComponent {
  todoList$ = todoList$;

  constructor() { }

  onAddTodo(todo: ITodo) {
    addTodo(todo);
  }

  onUpdateTodo(todo: ITodo) {
    updateTodo(todo);
  }

  onRemoveTodo(todo: ITodo) {
    removeTodo(todo.id!);
  }
}
