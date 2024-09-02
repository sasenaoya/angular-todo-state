import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

import { TodoListComponent } from './todo-list/todo-list.component';
import { StoreModule } from '@ngrx/store';
import { todoListReducer } from './state/todo-list.reducer';

const routes: Routes = [
  { path: 'todo-list', component: TodoListComponent },
];

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('TodoList', {
      todoList: todoListReducer,
    }),
  ]
})
export class NgrxModule { }
