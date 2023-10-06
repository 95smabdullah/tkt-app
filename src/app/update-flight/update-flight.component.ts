import { Component,OnInit } from '@angular/core';
import { FlightRequest } from '../app.model';
import { FlightService } from '../flight.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent {

  flightRequest:FlightRequest={name:'',src:'',dest:'',fare:0}
  id:number=0;
  constructor(private flightService:FlightService, private router:Router, private route:ActivatedRoute){}
  
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.id = +idParam;
    } else {
      this.id = 0;
    }
  }

  update(){
    this.flightService.updateFlight(this.flightRequest, this.id).subscribe(()=>{
      this.router.navigate(['/listFlights'])
    })
  }

}