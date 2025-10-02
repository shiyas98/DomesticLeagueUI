import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../../models/login-request.model';
import { UserLoginResponse } from '../../models/user.model';
import { SignupRequest } from '../../models/signup-request.model';
import { EmailVerifyRequest } from '../../models/emailverify-request';
import { PasswordResetRequest } from '../../models/passwordreset-request';
import { PermissionCheckResponse } from '../../models/check_permission';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://api.domesticleague.com/api'; // 👈 Replace with your backend URL

  constructor(private http: HttpClient) { }

  login(credentials: LoginRequest): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(`${this.baseUrl}/user/login`, credentials);
  }

  signup(credentials: SignupRequest): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(`${this.baseUrl}/user/signup`, credentials);
  }

  emailVerify(credentials: EmailVerifyRequest): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(`${this.baseUrl}/User/EmailVerify`, credentials);
  }

  resetPassword(credentials: PasswordResetRequest): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(`${this.baseUrl}/User/PasswordReset`, credentials);
  }

  checkPermission(
    userId: number | null,
    actionName: string | null,
    resourceId?: string | null
  ): Observable<PermissionCheckResponse> {
    return this.http.post<PermissionCheckResponse>(`${this.baseUrl}/User/check`, {
      userId,
      actionName,
      resourceId
    });
  }
}
