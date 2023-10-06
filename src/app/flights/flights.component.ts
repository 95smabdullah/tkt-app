import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { UserService } from '../user.service';
import { FlightResponse } from '../app.model';
import { BookingRequest } from '../app.model';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit{
  flights:FlightResponse[]=[];
  bookingRequest:BookingRequest={flightId:0, userId:0}
  userId:number=0;

  constructor(private flightService:FlightService, private router:Router, private userService:UserService, private bookingService:BookingService){}
  ngOnInit(): void {
    this.userId=this.userService.userId;
    this.flightService.listFlights().subscribe((response)=>{
      this.flights=response;
    });
  }

  delete(id:number){
    this.flightService.deleteFlight(id).subscribe(()=>{
      this.flightService.listFlights().subscribe((response)=>{
        this.flights=response;
      }); 
    });
  }

  update(id:number){
    this.router.navigate(['/update/flight', id])
  }

  book(flightId:number){
    this.bookingRequest.flightId=flightId;
    this.bookingRequest.userId=this.userService.userId;
    this.bookingService.createBooking(this.bookingRequest).subscribe(()=>{
      window.alert('Flight Booked')
    })
  }

}
