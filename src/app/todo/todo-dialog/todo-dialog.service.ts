import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TodoDialogComponent } from './todo-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDialogService {
  constructor(private dialog: MatDialog) { }

  show() {
    return this.dialog.open(TodoDialogComponent);
  }
}
