import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private isAdmin: boolean = false;

  constructor() {
    const storedUser = sessionStorage.getItem('user');
    const currentUser = storedUser ? JSON.parse(storedUser) : null;
    this.currentUserSubject = new BehaviorSubject<any>(currentUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public setUser(user: any): void {
    if (user.id_role === 1) {
      this.isAdmin = true;
    }
    sessionStorage.setItem('user', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  public checkIfAdmin() : boolean {
    return this.isAdmin;
  }

  public clearUser(): void {
    this.isAdmin = false;
    sessionStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }
}
