import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tournament } from '../models/tournament';
import { TournamentItem, TournamentWebResponse } from '../models/tournamentweb';
import { TournamentService } from '../core/services/tournament.service';
import { UserSessionService } from '../core/services/user-session.service';
import { UserData } from '../models/user.model';
import { UtilService } from '../core/services/util.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  error: string | null = null;
  //tournaments: Tournament[] | null = [];
  favorites: TournamentItem[] | null = [];
  userName: string | null = '';
  dashboardResponse: TournamentWebResponse | null = null;
tournaments1: TournamentItem[] = [];
filteredTournaments: TournamentItem[] = [];
  searchTerm = '';
  projects = [
  { name: 'Server Migration', progress: 20, progressLabel: '20%', color: 'warn' },
  { name: 'Sales Tracking', progress: 40, progressLabel: '40%', color: 'accent' },
  { name: 'Customer Database', progress: 60, progressLabel: '60%', color: '' },
  { name: 'Payout Details', progress: 80, progressLabel: '80%', color: 'primary' },
  { name: 'Account Setup', progress: 100, progressLabel: 'Complete!', color: 'primary' }
];


  favoriteTournaments = [
    { name: 'Summer Cup 2025', status: 'Ongoing', nextMatch: '14 Sep 5:00 PM' },
    { name: 'City Championship', status: 'Completed', nextMatch: '—' },
    { name: 'Winter Classic', status: 'Ongoing', nextMatch: '15 Sep 4:30 PM' },
    { name: 'Monsoon Trophy', status: 'Upcoming', nextMatch: '18 Sep 6:00 PM' },
    { name: 'Elite League', status: 'Ongoing', nextMatch: '19 Sep 7:00 PM' },
    { name: 'Legends Cup', status: 'Completed', nextMatch: '—' }
  ];

  upcomingMatches = [
    { teamA: 'Red Hawks', teamB: 'Blue Sharks', tournament: 'Summer Cup 2025', date: '14 Sep', time: '5:00 PM' },
    { teamA: 'Green Giants', teamB: 'Yellow Tigers', tournament: 'Local League A', date: '15 Sep', time: '6:30 PM' },
    { teamA: 'White Wolves', teamB: 'Black Panthers', tournament: 'Winter Classic', date: '16 Sep', time: '4:00 PM' },
    { teamA: 'Downtown FC', teamB: 'Urban United', tournament: 'Downtown League', date: '17 Sep', time: '7:30 PM' },
  ];

  activities = [
    'Red Hawks defeated Blue Sharks 3-1 (Summer Cup 2025)',
    'New team “Orange Owls” added to Local League A',
    'Green Giants signed player David Smith',
    'Winter Classic match rescheduled to 16 Sep',
    'Elite League added team “Silver Strikers”'
  ];




  constructor(private tournamentService: TournamentService, private userSessionService: UserSessionService
    , private router: Router, private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.getToursByUser();
    this.getFavorites();
    this.userName = this.userSessionService.getUserName();
  }
  getToursByUser() {
    debugger;
    //console.log('on submit');
    this.error = '';
    const usersId = this.userSessionService.getUserId();
    if (usersId) {
      const userdata: UserData = {
        uid: usersId,
        agent: 'web'
      };
      this.tournamentService.getToursByUserWeb(userdata).subscribe({
        next: (tournamentsResponse) => {
          console.log('tournamentsResponse', tournamentsResponse);
          this.dashboardResponse = tournamentsResponse;
          //console.log('tournaments ', JSON.stringify(tournamentsResponse));
          //console.log('isarray', Array.isArray(tournamentsResponse));
          this.tournaments1 = tournamentsResponse.tournaments;
          this.filteredTournaments = [...this.tournaments1];
        },
        error: (err) => {
          this.error = 'Login failed. Check your credentials.';
        }
      });
    }
  }

   filterTournaments(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredTournaments = this.tournaments1?.filter(t =>
      t.name?.toLowerCase().includes(term)
    );
  }

  getFavorites() {
    debugger;
    //console.log('before get favorites');
    this.error = '';
    const usersId = this.userSessionService.getUserId();
    if (usersId) {
      const userdata: UserData = {
        uid: usersId
      };
      this.tournamentService.getFavoritesByUser(userdata).subscribe({
        next: (favoritesResponse) => {
          //console.log('favorites ', JSON.stringify(favoritesResponse));
          //console.log('isarray', Array.isArray(favoritesResponse));
          //this.favorites = favoritesResponse;
        },
        error: (err) => {
          this.error = 'Get favorites error';
        }
      });
    }

  }

  goToTournament(tid: number) {
    this.router.navigate(['/tournament'], { queryParams: { id: tid } });
  }

  viewTournament(id: number) {
    this.router.navigate(['/tournament', id]);
  }

  addMatch(id: number) {
    this.router.navigate(['/tournament', id, 'add-match']);
  }

  getOngoingCount(): number {
    return this.filteredTournaments?.filter(t => t.status === 'Ongoing').length || 0;
  }

  // Test methods for Material Snackbar
  testSuccessSnackbar() {
    this.utilService.showSuccess('Tournament created successfully!', 'Success');
  }

  testErrorSnackbar() {
    this.utilService.showError('Something went wrong while creating the tournament.', 'Error');
  }

  testInfoSnackbar() {
    this.utilService.showInfo('This is an informational message about the system.', 'Information');
  }

  testWarningSnackbar() {
    this.utilService.showWarning('Please check your tournament settings before proceeding.', 'Warning');
  }
}
