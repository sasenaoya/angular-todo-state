// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// ngrx
import { StoreModule } from '@ngrx/store';

// todo
import { TodoModule } from '../todo/todo.module';

// state
import { todoListReducer } from './state/todo-list.reducer';

// components
import { NgrxTodoListComponent } from './ngrx-todo-list/ngrx-todo-list.component';

const routes: Routes = [
  { path: 'todo-list', component: NgrxTodoListComponent },
];

@NgModule({
  declarations: [
    NgrxTodoListComponent
  ],
  imports: [
    CommonModule,
    TodoModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('TodoList', {
      todoList: todoListReducer,
    }),
  ]
})
export class NgrxModule { }
