import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskProgressColumnComponent } from './task-progress-column.component';

describe('TaskProgressColumnComponent', () => {
  let component: TaskProgressColumnComponent;
  let fixture: ComponentFixture<TaskProgressColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskProgressColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskProgressColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
