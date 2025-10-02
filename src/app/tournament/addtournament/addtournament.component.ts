import { Component } from '@angular/core';
import { TournamentService } from '../../core/services/tournament.service';
import { UserSessionService } from '../../core/services/user-session.service';
import { Router } from '@angular/router';
import { UtilService } from '../../core/services/util.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addtournament',
  standalone: false,
  templateUrl: './addtournament.component.html',
  styleUrl: './addtournament.component.css'
})
export class AddtournamentComponent {
  logoPreview: string | null = null;
  
  constructor(private tournamentService: TournamentService, private userSessionService: UserSessionService
    , private router: Router, private util: UtilService, private location: Location
  ) { }
  
  tournament: any = {
    name: '',
    organizer: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
    logo: '',
    type: 'league',
    matchDuration: 90,
    pointsSystem: 'Win=3, Draw=1, Loss=0',
    adminEmail: '',
    visibility: 'public',
    teamsCount: ''
  };

  onLogoUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        this.util.showError('File size must be less than 5MB', 'Upload Error');
        return;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        this.util.showError('Please select a valid image file', 'Upload Error');
        return;
      }

      this.tournament.logo = file;
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.logoPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeLogo() {
    this.tournament.logo = '';
    this.logoPreview = null;
  }

  isFormValid(): boolean {
    return !!(
      this.tournament.name &&
      this.tournament.startDate &&
      this.tournament.endDate &&
      this.tournament.teamsCount &&
      this.tournament.teamsCount >= 2
    );
  }

  onSubmit() {
    debugger;
    const data = {
      tid: 0,
      name: this.tournament.name,
      uid: this.userSessionService.getUserId(),
      //format: string;
      teamscount: this.tournament.teamsCount,
      location: this.tournament.location,
      description: this.tournament.description,
      startdate: this.tournament.startDate,
      enddate: this.tournament.endDate,
      //image: this.tournament.
      organizer: this.tournament.organizer
    };
    this.tournamentService.addTournament(data).subscribe({
      next: (tournamentResponse) => {
        console.log('tournamentResponse', tournamentResponse);
        if(tournamentResponse.result == 1){
          this.util.showSuccess('Tournament created successfully!');
        }
        else{
          this.util.showError('Something went wrong while creating the tournament.');
        }
        /* if (tournamentResponse) {
          this.tournamentDetails = tournamentResponse[0];
        } */


      },
      error: (err) => {
        this.util.showError('Something went wrong while creating the tournament.');
        //this.error = 'Login failed. Check your credentials.';
      }
    });

    console.log('Tournament Created:', this.tournament);
    // Call service to save tournament
  }

  goBack(): void {
    this.location.back();   // navigates to the previous page/route
  }
}
