import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('f') loginForm: NgForm;

  constructor() { }

  onSubmit(form: NgForm) {

    console.log(this.loginForm.value);
  
  }

}
