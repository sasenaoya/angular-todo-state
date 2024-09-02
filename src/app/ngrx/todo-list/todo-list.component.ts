import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { Subject, takeUntil } from 'rxjs';

import { TodoListFacadeService } from '../state/todo-list.facade.service';
import { ITodo } from '../../todo/todo.model';
import { TodoDialogService } from '../../todo/todo-dialog/todo-dialog.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;

  todoList$;
  dataSource = new MatTableDataSource<ITodo>();

  displayedColumns: string[] = ['name', 'date', 'icon'];

  private destroy$ = new Subject<void>();

  constructor(
    private todoListFacadeService: TodoListFacadeService,
    private todoDialogService: TodoDialogService,
  ) {
    this.todoList$ = todoListFacadeService.todoList$;
  }

  ngAfterViewInit() {
    this.todoList$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onAddTodo() {
    this.todoDialogService.show().afterClosed().subscribe((todo: ITodo) => {
      if (todo) {
        this.todoListFacadeService.addTodo(todo);
      }
    });
  }

  onEditTodo(todo: ITodo) {
    this.todoDialogService.show(todo).afterClosed().subscribe((todo: ITodo) => {
      if (todo) {
        this.todoListFacadeService.updateTodo(todo);
      }
    });
  }

  onRemoveTodo(todo: ITodo) {
    this.todoListFacadeService.removedTodo(todo.id!);
  }
}
