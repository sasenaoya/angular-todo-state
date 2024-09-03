// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// ngxs
import { NgxsModule as _NgxsModule } from '@ngxs/store';

// todo
import { TodoModule } from '../todo/todo.module';

// components
import { NgxsTodoListComponent } from './ngxs-todo-list/ngxs-todo-list.component';
import { TodoListState } from './state/todo-list.state';

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
    _NgxsModule.forFeature([TodoListState]),
  ]
})
export class NgxsModule { }
