import { ActivatedRoute } from '@angular/router';


//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';//'./app.component';
//import { AppComponent } from '../app.component';

//@ComponentScan(

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  welcomeMessageFromService:string
  name = ''

  constructor(){}

  

  // void init() {
  ngOnInit(){

  }
}