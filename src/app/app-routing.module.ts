import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightsComponent } from './flights/flights.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'listFlights', component: FlightsComponent},
  { path: 'create/flight', component: AddFlightComponent},
  { path: 'listBookings', component: BookingsComponent},
  { path: 'update/flight/:id', component: UpdateFlightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
