import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrl: './todo-dialog.component.scss'
})
export class TodoDialogComponent {
  readonly dialogRef = inject(MatDialogRef<TodoDialogComponent>);

  formGroup;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      name: ['', Validators.required],
      date: [<Date | null>(null)],
    });
  }

  onSave() {
    this.dialogRef.close({
      id: uuidv4(),
      name: this.formGroup.value.name,
      date: this.formGroup.value.date ? dayjs(this.formGroup.value.date) : undefined,
    });
  }
}
