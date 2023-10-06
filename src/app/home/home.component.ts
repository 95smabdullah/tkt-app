import { Component } from '@angular/core';
import { UserRequest,UserResponse } from '../app.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userRequest: UserRequest={user:'',password:''};
  errorMessage: string = '';
  loginMode=true;

  constructor(private userService:UserService, private router:Router){}

  login(){
    this.userService.login(this.userRequest).subscribe((userResponse:UserResponse)=>{
      if(userResponse.id===0){
        this.errorMessage = "Incorrect Username/Password"
      } else{
        this.errorMessage='';
        this.userService.userId=userResponse.id;
        this.router.navigate(['/listFlights']);
      }
    })
  }

  register(){
    this.userService.create(this.userRequest).subscribe((userResponse:UserResponse)=>{
      this.userService.userId=userResponse.id;
      this.router.navigate(['/listFlights']);
    })
  }

  toggleLoginMode(){
    this.loginMode=!this.loginMode;
  }

}
