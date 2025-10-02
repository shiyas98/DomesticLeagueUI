import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../../models/login-request.model';
import { UserData, UserLoginResponse } from '../../models/user.model';
import { SignupRequest } from '../../models/signup-request.model';
import { EmailVerifyRequest } from '../../models/emailverify-request';
import { PasswordResetRequest } from '../../models/passwordreset-request';
import { Tournament, TournamentResponse } from '../../models/tournament';
import { TournamentWebResponse } from '../../models/tournamentweb';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private baseUrl = 'https://api.domesticleague.com/api'; // ðŸ‘ˆ Replace with your backend URL

  constructor(private http: HttpClient) { }

  getToursByUser(user: UserData): Observable<TournamentResponse> {
    return this.http.post<TournamentResponse>(`${this.baseUrl}/Tour/getTourByIdWeb`, user);
  }

  getFavoritesByUser(user: UserData): Observable<Tournament[]> {
    return this.http.post<Tournament[]>(`${this.baseUrl}/Favorite/getFavoritesById`, user);
  }

  getTourByTid(payload: any): Observable<Tournament[]> {
    return this.http.post<Tournament[]>(`${this.baseUrl}/Tour/getTourByTid`, payload);
  }

  addTournament(payload: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Tour/addtour`, payload);
  }

  deleteTournament(payload: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Tour/deleteTournament`, payload);
  }

  checkAdminAndFavorite(payload: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Tour/CheckUserIsAdmin`, payload);
  }

  getToursByUserWeb(user: UserData): Observable<TournamentWebResponse> {
    return this.http.post<TournamentWebResponse>(`${this.baseUrl}/Tour/getTourByIdWeb`, user);
  }

}