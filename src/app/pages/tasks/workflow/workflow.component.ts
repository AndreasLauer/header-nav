import { Component, OnInit } from '@angular/core';
import { Task } from '../../../task';
import { TaskService } from '../../../task.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.scss']
})
export class WorkflowComponent implements OnInit {
  allTasks: Task[] = [];
  allEpics: Epic[] = [];
  actualToDoTasks: Task[] = [];
  actualInProgressTasks: Task[] = [];
  actualToVerifyTasks: Task[] = [];
  actualDoneTasks: Task[] = [];
  selectedTask: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getActualTasks();
  }

  getActualTasks(): void {
    this.taskService.getTasks()
      .subscribe((tasks: Array<Task>): any => {
        this.allTasks = tasks.filter(task => task.status === 'actual');
        this.getAllEpics();
        this.sortActualTasksByEpic();
        this.actualToDoTasks = tasks.filter(task => task.progressStatus === 'to-do');
        this.actualInProgressTasks = tasks.filter(task => task.progressStatus === 'in-progress');
        this.actualToVerifyTasks = tasks.filter(task => task.progressStatus === 'to-verify');
        this.actualDoneTasks = tasks.filter(task => task.progressStatus === 'done');
      });
  }

  getAllEpics() {
    this.allTasks.forEach( task => {
      if (!this.allEpics.filter(epic => epic.name === task.epic).length) {
        this.allEpics.push({name: task.epic});
      }
    });
  }

  sortActualTasksByEpic() {
    this.allEpics.forEach(epic => {
      epic.toDos = this.allTasks.filter(task => {
        return epic.name === task.epic && task.progressStatus === 'to-do'
      });
      epic.inProgress = this.allTasks.filter(task => {
        return epic.name === task.epic && task.progressStatus === 'in-progress'
      });
      epic.toVerify = this.allTasks.filter(task => {
        return epic.name === task.epic && task.progressStatus === 'to-verify'
      });
      epic.done = this.allTasks.filter(task => {
        return epic.name === task.epic && task.progressStatus === 'done'
      });
    });
  }
}

interface Epic {
  name: string;
  toDos?: Task[];
  inProgress?: Task[];
  toVerify?: Task[];
  done?: Task[];
}
