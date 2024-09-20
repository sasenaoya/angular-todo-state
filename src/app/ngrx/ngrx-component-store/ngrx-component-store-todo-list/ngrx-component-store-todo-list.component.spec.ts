import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxComponentStoreTodoListComponent } from './ngrx-component-store-todo-list.component';

describe('NgrxComponentStoreTodoListComponent', () => {
  let component: NgrxComponentStoreTodoListComponent;
  let fixture: ComponentFixture<NgrxComponentStoreTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgrxComponentStoreTodoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxComponentStoreTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
