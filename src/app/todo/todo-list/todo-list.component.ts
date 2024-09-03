// Angular
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';

// Angular material
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

// TODO
import { ITodo } from '../todo.model';
import { TodoDialogService } from '../todo-dialog/todo-dialog.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements AfterViewInit, OnChanges {
  @ViewChild(MatSort) sort!: MatSort;

  @Input({required: true}) todoList: ITodo[] | null = null;

  @Output() add = new EventEmitter<ITodo>();
  @Output() update = new EventEmitter<ITodo>();
  @Output() remove = new EventEmitter<ITodo>();

  dataSource = new MatTableDataSource<ITodo>();
  displayedColumns: string[] = ['name', 'date', 'icon'];

  constructor(private todoDialogService: TodoDialogService) {}

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["todoList"]) {
      this.dataSource.data = this.todoList ?? [];
    }
  }

  onAddTodo() {
    this.todoDialogService.show().afterClosed().subscribe(todo => {
      if (todo) {
        this.add.emit(todo);
      }
    });
  }

  onEditTodo(todo: ITodo) {
    this.todoDialogService.show(todo).afterClosed().subscribe(todo => {
      if (todo) {
        this.update.emit(todo);
      }
    });
  }

  onRemoveTodo(todo: ITodo) {
    this.remove.emit(todo);
  }
}
