import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../task.service';
import { Task } from '../../../task';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  finishedTasksTitle = "Finished Tasks";
  finishedTasks:  Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getFinishedTasks();
  }

  getFinishedTasks(): void {
    this.taskService.getTasks()
      .subscribe((tasks: Array<Task>): any => this.finishedTasks = tasks.filter(task => task.status === 'finished'));
  }

  taskSelected(event: Task) {
    // alert('gugge: ' + event.id);
  }
}
