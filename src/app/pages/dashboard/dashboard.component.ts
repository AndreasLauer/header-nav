import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
}