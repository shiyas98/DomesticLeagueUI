import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TournamentTeam } from '../../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
private baseUrl = 'https://api.domesticleague.com/api';
  constructor(private http: HttpClient) { }
  getTeamsByTid(payload: any): Observable<TournamentTeam[]> {
      return this.http.post<TournamentTeam[]>(`${this.baseUrl}/Teams/getTeamsbyTournament`, payload);
    }
}
