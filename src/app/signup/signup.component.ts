import { ViewChild, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
@ViewChild('f') signupForm: NgForm;

  constructor() { }

  onSubmit(form: NgForm) {

    console.log(this.signupForm.value);

  }

}
