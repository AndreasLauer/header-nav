import { Component, OnInit } from '@angular/core';
import { Task } from '../../../task';
import { TaskService } from '../../../task.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {
  backlogTasksTitle = "Backlog Tasks";
  backlogTasks: Task[] = [];
  actualTasksTitle = "Actual Tasks";
  actualTasks: Task[] = [];
  selectedTask: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getBacklogTasks();
    this.getActualTasks();
  }

  getBacklogTasks(): void {
    this.taskService.getTasks()
      .subscribe((tasks: Array<Task>): any => this.backlogTasks = tasks.filter(task => task.status === 'new'));
  }

  getActualTasks(): void {
    this.taskService.getTasks()
      .subscribe((tasks: Array<Task>): any => this.actualTasks = tasks.filter(task => task.status === 'actual'));
  }

  taskSelected(task: Task) {
    this.selectedTask = task;
  }

}
