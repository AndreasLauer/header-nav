import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.scss']
})
export class TaskListItemComponent implements OnInit {
  @Input() task: Task;
  @Output() taskSelected: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  taskItemSelected(): void {
    this.taskSelected.emit(this.task);
  }

}
