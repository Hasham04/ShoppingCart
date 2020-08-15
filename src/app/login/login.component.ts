import { BasicAuthenticationService } from './../service/basic-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



// In this component we check that the details provided by the user are accurate. In this Login.component.ts we are checking if the user is logged in. If they are logged in we show them the welome page.

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false


  constructor(private router: Router,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }


  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false      
          },
          error => {
            console.log(error)
            this.invalidLogin = true
          }
        )
  }

}
