import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TodoDialogComponent } from './todo-dialog.component';
import { ITodo } from '../todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoDialogService {
  constructor(private dialog: MatDialog) { }

  show(todo?: ITodo) {
    return this.dialog.open(TodoDialogComponent, { data: todo});
  }
}
