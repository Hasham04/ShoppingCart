import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})


// we present an error if the user tries to route to a page without logging in.
export class ErrorComponent implements OnInit {

  errorMessage = 'An Error Occured'

  constructor() { }

  ngOnInit() {
  }

}
