import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'football-scorecard';
  isDesktop = true;

  constructor() {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isDesktop = window.innerWidth >= 1024;
  }
}