import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { Subject, takeUntil } from 'rxjs';

import { TodoListFacadeService } from '../state/todo-list.facade.service';
import { ITodo } from '../../todo/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;

  todoList$;
  dataSource = new MatTableDataSource<ITodo>();

  displayedColumns: string[] = ['name', 'date'];

  private destroy$ = new Subject<void>();

  constructor(private todoListFacadeService: TodoListFacadeService) {
    this.todoList$ = todoListFacadeService.todoList$;
    todoListFacadeService.addTodo({ id: 1, name: 'Buy milk' });
    todoListFacadeService.addTodo({ id: 2, name: 'Buy eggs' });
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
}
