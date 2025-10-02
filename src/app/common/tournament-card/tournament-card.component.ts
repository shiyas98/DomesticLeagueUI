import { Component, Input } from '@angular/core';
import { Tournament } from '../../models/tournament';
import { TournamentItem } from '../../models/tournamentweb';

@Component({
  selector: 'app-tournament-card',
  standalone: false,
  templateUrl: './tournament-card.component.html',
  styleUrl: './tournament-card.component.css'
})
export class TournamentCardComponent {
  @Input() tournament!: TournamentItem;
  @Input() onCardClick!: (tournament: TournamentItem) => void;

  handleClick() {
    if (this.onCardClick) {
      this.onCardClick(this.tournament);
    }
  }
}
