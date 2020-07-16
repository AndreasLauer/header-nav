import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.scss']
})
export class TaskListContainerComponent implements OnInit {
  @Input() title: string;
  @Input() tasks: Task[];
  @Output() taskSelected: EventEmitter<Task> = new EventEmitter<Task>();

  isExpanded: boolean = true;

  constructor() { }

  ngOnInit(): void {
    let x = 1;
  }

  collapse() {
    this.tasks = []; // @TODO: better set class!
  }

  taskItemSelected(event) {
    this.taskSelected.emit(event);
  }

}
