import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'AL - Header Navigation';
  displayFooter: boolean = false;

  sidenavLinks = [];

  toggleFooter(event: boolean): void {
    this.displayFooter = event;
  }

  setDashboardLinks(event) {
    this.sidenavLinks = event;
  }
}
