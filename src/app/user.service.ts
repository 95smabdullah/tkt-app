import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRequest, UserResponse } from './app.model';  

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url ='http://localhost:8080/fly'
  constructor(private http: HttpClient) { }
  userId:number=0;

  create(userRequest:UserRequest):Observable<UserResponse>{
    return this.http.post<UserResponse>(`${this.url}/create/user`,userRequest);
  }

  login(userRequest: UserRequest):Observable<UserResponse>{
    return this.http.post<UserResponse>(`${this.url}/login`,userRequest);
  }
}
