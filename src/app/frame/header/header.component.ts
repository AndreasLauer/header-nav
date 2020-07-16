import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleShowFooter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() dashboardLinks = new EventEmitter<Array<any>>();
  title: string = 'AL - Header Navigation';
  showFooter: boolean = false;
  
  constructor(private router: Router) { }
  private readonly taskMenu = [
    {path: 'tasks/overview', name: 'Overview'},
    {path: 'tasks/workflow', name: 'Workflow'},
    {path: 'tasks/backlog', name: 'Backlog'},
    {path: 'tasks/archive', name: 'Archive'},
    {path: 'tasks/finalize', name: 'Finalize'},
    {path: 'tasks/specs', name: 'Specs'},
  ];

  private readonly angularMenu = [
    {path: 'angular/overview', name: 'Overview'},
    {path: 'angular/material', name: 'Material'},
    {path: 'angular/fxflex', name: 'FxFlex'},
    {path: 'angular/playground', name: 'Playground'},
  ];

  private readonly mediaMenu = [
    {path: 'media/overview', name: 'Overview'},
    {path: 'media/images', name: 'Images'},
    {path: 'media/music', name: 'music'},
  ];

  ngOnInit(): void {
    // let url = this.router.url;
    if (window.location.href.includes('/tasks/')) {
      this.dashboardLinks.emit(this.taskMenu);
    } else if (window.location.href.includes('/angular/')) {
      this.dashboardLinks.emit(this.angularMenu);
    } else if (window.location.href.includes('/media/')) {
      this.dashboardLinks.emit(this.mediaMenu);
    } else {
      this.dashboardLinks.emit([]);
    }
  }

  toggleFooter(): void {
    this.showFooter = !this.showFooter;
    this.toggleShowFooter.emit(this.showFooter);
  }

  tasksLinkClicked(): void {
    this.dashboardLinks.emit(this.taskMenu);
  }

  angularLinkClicked(): void {
    this.dashboardLinks.emit(this.angularMenu);
  }

  mediaLinkClicked(): void {
    this.dashboardLinks.emit(this.mediaMenu);
  }

}
