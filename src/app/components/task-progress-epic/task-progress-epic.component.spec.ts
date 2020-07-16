import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskProgressEpicComponent } from './task-progress-epic.component';

describe('TaskProgressEpicComponent', () => {
  let component: TaskProgressEpicComponent;
  let fixture: ComponentFixture<TaskProgressEpicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskProgressEpicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskProgressEpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
