import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: 'todo-list', component: TodoListComponent },
];

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class NgrxModule { }
