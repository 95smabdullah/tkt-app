import { Component, OnInit } from '@angular/core';
import { BookingResponse } from '../app.model';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit{

  bookings:BookingResponse[]=[]
  
  constructor(private bookingService:BookingService, private userService:UserService, private router:Router){}
  ngOnInit(): void {
    this.bookingService.listBooking(this.userService.userId).subscribe((response)=>{
      this.bookings=response;
    })
  }

  delete(id:number){
    this.bookingService.deleteBooking(id).subscribe(()=>{
      this.bookingService.listBooking(this.userService.userId).subscribe((response)=>{
        this.bookings=response;
      });
    });
  }






}
