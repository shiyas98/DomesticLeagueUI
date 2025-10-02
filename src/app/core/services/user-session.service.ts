import { Injectable } from '@angular/core';
import { UserSession } from '../../models/user-session.model';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
private storageKey = 'user';
  constructor() { }

  getUser(): UserSession | null {
    const userJson = localStorage.getItem(this.storageKey);
    return userJson ? JSON.parse(userJson) as UserSession : null;
  }

  // ✅ Method to get only the user's name
  getUserName(): string | null {
    const user = this.getUser();
    return user?.name ?? null;
  }

  getUserImage(): string | null {
    const user = this.getUser();
    return user?.name ?? null;
  }

  getUserId1(): number | null {
    const user = this.getUser();
    return user?.uid ?? null;
  }

  getUserId(): number | null {
    return 2;
  }
}
