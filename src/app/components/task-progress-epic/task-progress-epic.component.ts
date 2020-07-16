import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-progress-epic',
  templateUrl: './task-progress-epic.component.html',
  styleUrls: ['./task-progress-epic.component.css']
})
export class TaskProgressEpicComponent implements OnInit {
  @Input() public epic: any;
  todoTitle: string = 'To Do';
  inProgressTitle: string = 'In Progress';
  toVerifyTitle: string = 'To Verify';
  doneTitle: string = 'Done';

  constructor() { }

  ngOnInit(): void {
  }

}
