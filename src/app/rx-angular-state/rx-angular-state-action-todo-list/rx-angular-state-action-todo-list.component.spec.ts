import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxAngularStateActionTodoListComponent } from './rx-angular-state-action-todo-list.component';

describe('RxAngularStateActionTodoListComponent', () => {
  let component: RxAngularStateActionTodoListComponent;
  let fixture: ComponentFixture<RxAngularStateActionTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxAngularStateActionTodoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxAngularStateActionTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
