// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// todo
import { TodoModule } from '../todo/todo.module';

// components
import { NgxsTodoListComponent } from './ngxs-todo-list/ngxs-todo-list.component';

const routes: Routes = [
  { path: 'todo-list', component: NgxsTodoListComponent },
];

@NgModule({
  declarations: [
    NgxsTodoListComponent
  ],
  imports: [
    CommonModule,
    TodoModule,
    RouterModule.forChild(routes),
  ]
})
export class NgxsModule { }
