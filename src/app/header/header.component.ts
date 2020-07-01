import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleShowFooter: EventEmitter<boolean> = new EventEmitter<boolean>();
  title: string = 'AL - Header Navigation';
  showFooter: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleFooter(): void {
    this.showFooter = !this.showFooter;
    this.toggleShowFooter.emit(this.showFooter);
  }

}
