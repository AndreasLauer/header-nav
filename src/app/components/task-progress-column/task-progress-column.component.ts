import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-task-progress-column',
  templateUrl: './task-progress-column.component.html',
  styleUrls: ['./task-progress-column.scss']
})
export class TaskProgressColumnComponent implements OnInit {
  @Input() public title: string;
  @Input() public tasks: Task[];

  constructor() { }

  ngOnInit(): void {

  }

}
