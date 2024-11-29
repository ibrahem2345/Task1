// user.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../user.model';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private API_URL = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  private userCache = new Map();

  getUserById(id: number): Observable<any> {
    if (this.userCache.has(id)) {
      return of(this.userCache.get(id));
    }
    return this.http.get(`https://reqres.in/api/users/${id}`).pipe(
      tap((data) => this.userCache.set(id, data))
    );
  }
  

  getUsers(page: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.API_URL}?page=${page}`);
  }

  getUser(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.API_URL}/${id}`);
  }
}
