import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingRequest, BookingResponse } from './app.model';  

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private url = 'http://localhost:8080/fly'
  constructor(private http: HttpClient) { }

  createBooking(bookingRequest:BookingRequest):Observable<BookingResponse>{
    return this.http.post<BookingResponse>(`${this.url}/create/booking`, bookingRequest);
  }

  listBooking(userId:number):Observable<BookingResponse[]>{
    return this.http.get<BookingResponse[]>(`${this.url}/listBookings/${userId}`);
  }

  deleteBooking(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/delete/booking/${id}`);
  }
}
