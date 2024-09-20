import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxTodoListComponent } from './ngrx-store-todo-list.component';

describe('NgrxTodoListComponent', () => {
  let component: NgrxTodoListComponent;
  let fixture: ComponentFixture<NgrxTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgrxTodoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
