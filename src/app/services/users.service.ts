import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  api = "https://reqres.in/api/users"

  constructor(private http: HttpClient) { }


  getUsers(page: number): Observable<any> {
    return this.http.get<any>(`${this.api}?page=${page}`);
  }

  getUserDetails(userId: string | null): Observable<any> {
    return this.http.get<any>(`${this.api}/${userId}`);
  }
}
