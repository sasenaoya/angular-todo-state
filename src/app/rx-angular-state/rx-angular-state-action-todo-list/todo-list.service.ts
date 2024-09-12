import { Injectable, signal } from '@angular/core';

// @rx-angular/state
import { rxActions } from '@rx-angular/state/actions';

// TODO
import { ITodo } from '../../todo/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList = signal<ITodo[]>([
    { id: "1", name: 'Buy milk' },
    { id: "2", name: 'Buy eggs' },
  ]);

  private actions = rxActions<{
    addTodo: ITodo,
    updateTodo: ITodo,
    removeTodo: ITodo,
  }>();

  constructor() {
    // pipeでDBの更新などの副作用を行うことができる
    this.actions.addTodo$.subscribe(todo => this.todoList.set([ ...this.todoList(), todo]));
    this.actions.updateTodo$.subscribe(todo => this.todoList.set(this.todoList().map(t => t.id === todo.id ? todo : t)));
    this.actions.removeTodo$.subscribe(todo => this.todoList.set(this.todoList().filter(t => t.id !== todo.id)));
  }

  addTodo(todo: ITodo) {
    this.actions.addTodo(todo);
  }

  updateTodo(todo: ITodo) {
    this.actions.updateTodo(todo);
  }

  removeTodo(todo: ITodo) {
    this.actions.removeTodo(todo);
  }
}
