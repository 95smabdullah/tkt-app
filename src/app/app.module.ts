import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlightsComponent } from './flights/flights.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlightsComponent,
    AddFlightComponent,
    BookingsComponent,
    UpdateFlightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
