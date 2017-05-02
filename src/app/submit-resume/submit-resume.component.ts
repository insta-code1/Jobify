import { Component,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-submit-resume',
  templateUrl: './submit-resume.component.html',
  styleUrls: ['./submit-resume.component.css']
})
export class SubmitResumeComponent {
  @ViewChild('f') resumeForm: NgForm;


  constructor() { }

    onSubmit(form: NgForm) {

    console.log(this.resumeForm.value);

  }
}
