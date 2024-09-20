// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// todo
import { TodoModule } from '../../todo/todo.module';

// components
import { NgrxComponentStoreTodoListComponent } from './ngrx-component-store-todo-list/ngrx-component-store-todo-list.component';

const routes: Routes = [
  { path: 'todo-list', component: NgrxComponentStoreTodoListComponent },
];

@NgModule({
  declarations: [
    NgrxComponentStoreTodoListComponent
  ],
  imports: [
    CommonModule,
    TodoModule,
    RouterModule.forChild(routes),
  ],
})
export class NgrxComponentStoreModule { }
