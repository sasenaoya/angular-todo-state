import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxAngularStateTodoListComponent } from './rx-angular-state-todo-list.component';

describe('RxAngularStateTodoListComponent', () => {
  let component: RxAngularStateTodoListComponent;
  let fixture: ComponentFixture<RxAngularStateTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxAngularStateTodoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxAngularStateTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
