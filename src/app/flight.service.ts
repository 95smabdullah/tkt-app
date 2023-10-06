import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightRequest, FlightResponse } from './app.model';  

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private url = 'http://localhost:8080/fly'

  constructor(private http: HttpClient) { }

  createFlight(flightRequest:FlightRequest):Observable<FlightResponse>{
    return this.http.post<FlightResponse>(`${this.url}/create/flight`, flightRequest);
  }

  listFlights():Observable<FlightResponse[]>{
    return this.http.get<FlightResponse[]>(`${this.url}/listFlights`);
  }

  updateFlight(flightRequest:FlightRequest, id:number):Observable<FlightResponse>{
    return this.http.put<FlightResponse>(`${this.url}/update/flight/${id}`, flightRequest);
  }

  deleteFlight(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/delete/flight/${id}`);
  }
}
