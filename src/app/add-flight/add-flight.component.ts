import { Component,OnInit } from '@angular/core';
import { FlightRequest,FlightResponse } from '../app.model';
import { FlightService } from '../flight.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit{

  flightRequest:FlightRequest={name:'',src:'',dest:'',fare:0}
  id:number=0;
  constructor(private flightService:FlightService, private router:Router, private userService:UserService){}
  
  ngOnInit(): void {
    this.id=this.userService.userId
  }

  add(){
    this.flightService.createFlight(this.flightRequest).subscribe(()=>{
      this.router.navigate(['/listFlights'])
    })
  }

}
