import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsTodoListComponent } from './ngxs-todo-list.component';

describe('NgxsTodoListComponent', () => {
  let component: NgxsTodoListComponent;
  let fixture: ComponentFixture<NgxsTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxsTodoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxsTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
