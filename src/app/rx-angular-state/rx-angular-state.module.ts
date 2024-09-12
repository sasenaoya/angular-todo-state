import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TodoModule } from '../todo/todo.module';

import { RxAngularStateTodoListComponent } from './rx-angular-state-todo-list/rx-angular-state-todo-list.component';

const routes: Routes = [
  { path: 'todo-list', component: RxAngularStateTodoListComponent },
];

@NgModule({
  declarations: [
    RxAngularStateTodoListComponent
  ],
  imports: [
    CommonModule,
    TodoModule,
    RouterModule.forChild(routes),
  ]
})
export class RxAngularStateModule { }
