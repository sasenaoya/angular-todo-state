import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { ITodo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements AfterViewInit, OnChanges {
  @ViewChild(MatSort) sort!: MatSort;

  @Input({required: true}) todoList: ITodo[] | null = null;

  @Output() add = new EventEmitter<void>();
  @Output() edit = new EventEmitter<ITodo>();
  @Output() remove = new EventEmitter<ITodo>();

  dataSource = new MatTableDataSource<ITodo>();
  displayedColumns: string[] = ['name', 'date', 'icon'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["todoList"]) {
      this.dataSource.data = this.todoList ?? [];
    }
  }

  onAddTodo() {
    this.add.emit();
  }

  onEditTodo(todo: ITodo) {
    this.edit.emit(todo);
  }

  onRemoveTodo(todo: ITodo) {
    this.remove.emit(todo);
  }
}
