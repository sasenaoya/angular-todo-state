import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import { ITodo } from '../todo.model';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrl: './todo-dialog.component.scss'
})
export class TodoDialogComponent {
  readonly dialogRef = inject(MatDialogRef<TodoDialogComponent>);
  readonly data = inject<ITodo>(MAT_DIALOG_DATA);

  formGroup;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      name: [this.data?.name, Validators.required],
      date: [this.data?.date?.toDate() ?? null],
    });
  }

  onSave() {
    this.dialogRef.close({
      id: this.data?.id ?? uuidv4(),
      name: this.formGroup.value.name,
      date: this.formGroup.value.date ? dayjs(this.formGroup.value.date) : undefined,
    });
  }
}
