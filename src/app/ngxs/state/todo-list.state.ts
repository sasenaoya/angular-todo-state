import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { ITodo } from '../../todo/todo.model';
import { AddTodo, UpdateTodo, RemoveTodo } from './todo-list.actions';

@State<ITodo[]>({
  name: 'todoList',
  defaults: [
    { id: "1", name: 'Buy milk' },
    { id: "2", name: 'Buy eggs' },
  ]
})
@Injectable()
export class TodoListState {
  @Selector()
  static getTodoList(state: ITodo[]) {
    return state;
  }

  @Action(AddTodo)
  addTodo(ctx: StateContext<ITodo[]>, { todo }: AddTodo) {
    console.log("🔶addTodo", todo);
    const state = ctx.getState();
    ctx.setState([...state, todo]);
  }

  @Action(UpdateTodo)
  editTodo(ctx: StateContext<ITodo[]>, { todo }: UpdateTodo) {
    const state = ctx.getState();
    ctx.setState(state.map(s => s.id === todo.id ? todo : s));
  }

  @Action(RemoveTodo)
  removeTodo(ctx: StateContext<ITodo[]>, { id }: RemoveTodo) {
    const state = ctx.getState();
    ctx.setState(state.filter(s => s.id !== id));
  }
}