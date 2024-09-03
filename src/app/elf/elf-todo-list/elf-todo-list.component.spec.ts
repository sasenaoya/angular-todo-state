import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElfTodoListComponent } from './elf-todo-list.component';

describe('ElfTodoListComponent', () => {
  let component: ElfTodoListComponent;
  let fixture: ComponentFixture<ElfTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElfTodoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElfTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
