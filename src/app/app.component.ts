import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'football-scorecard';

  constructor() {}

  ngOnInit(): void {
   
  }
}