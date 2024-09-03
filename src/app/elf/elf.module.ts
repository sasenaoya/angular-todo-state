// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// todo
import { TodoModule } from '../todo/todo.module';

// components
import { ElfTodoListComponent } from './elf-todo-list/elf-todo-list.component';

const routes: Routes = [
  { path: 'todo-list', component: ElfTodoListComponent },
];

@NgModule({
  declarations: [
    ElfTodoListComponent
  ],
  imports: [
    CommonModule,
    TodoModule,
    RouterModule.forChild(routes),
  ]
})
export class ElfModule { }
