import { Component } from '@angular/core';

// @rx-angular/state
import { rxState } from '@rx-angular/state';

// TODO
import { ITodo } from '../../todo/todo.model';

type TodoListState = {
  todoList: ITodo[];
};

@Component({
  selector: 'app-rx-angular-state-todo-list',
  templateUrl: './rx-angular-state-todo-list.component.html',
  styleUrl: './rx-angular-state-todo-list.component.scss'
})
export class RxAngularStateTodoListComponent {
  private state = rxState<TodoListState>(({set}) => {
    // set initial state
    set({
      todoList: [
        { id: "1", name: 'Buy milk' },
        { id: "2", name: 'Buy eggs' },
      ]
    });
  });

  // select a property for the template to consume as an observable
  todoList$ = this.state.select('todoList');
  // select a property for the template to consume as a signal
  todoList = this.state.signal('todoList');

  onAddTodo(todo: ITodo) {
    this.state.set('todoList', (state) => [...state.todoList, todo]);
  }

  onUpdateTodo(todo: ITodo) {
    this.state.set('todoList', (state) => state.todoList.map(t => t.id === todo.id ? todo : t));
  }
  
  onRemoveTodo(todo: ITodo) {
    this.state.set('todoList', (state) => state.todoList.filter(t => t.id !== todo.id));
  }
}
