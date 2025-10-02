import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
private baseUrl = 'https://api.domesticleague.com/api'; // 👈 Replace with your backend URL
  constructor(private http: HttpClient) { }

  getMatchesByTid(payload: any): Observable<Match[]> {
    return this.http.post<Match[]>(`${this.baseUrl}/FMatch/getmatchByTournament`, payload);
  }

  addMatch(payload: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/FMatch/AddMatchTour`, payload);
  }
}
