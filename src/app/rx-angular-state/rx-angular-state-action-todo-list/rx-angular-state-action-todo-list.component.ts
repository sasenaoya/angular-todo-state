import { Component } from '@angular/core';

// TODO
import { ITodo } from '../../todo/todo.model';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-rx-angular-state-action-todo-list',
  templateUrl: './rx-angular-state-action-todo-list.component.html',
  styleUrl: './rx-angular-state-action-todo-list.component.scss'
})
export class RxAngularStateActionTodoListComponent {
  todoList;

  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.todoList;
  }

  onAddTodo(todo: ITodo) {
    this.todoListService.addTodo(todo);
  }

  onUpdateTodo(todo: ITodo) {
    this.todoListService.updateTodo(todo);
  }
  
  onRemoveTodo(todo: ITodo) {
    this.todoListService.removeTodo(todo);
  }
}
