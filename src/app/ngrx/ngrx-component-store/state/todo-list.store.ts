import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";

import { ITodo } from "../../../todo/todo.model";

export interface TodoListState {
  todoList: ITodo[];
}

@Injectable()
export class TodoListStore extends ComponentStore<TodoListState> {

  constructor() {
    super({ todoList: [
        { id: "1", name: 'Buy milk' },
        { id: "2", name: 'Buy eggs' },
    ] });
  }
}