import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  standalone: false
})
export class TopnavComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
}
