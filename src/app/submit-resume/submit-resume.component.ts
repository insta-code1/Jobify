import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-submit-resume',
  templateUrl: './submit-resume.component.html',
  styleUrls: ['./submit-resume.component.css']
})
export class SubmitResumeComponent {

  @ViewChild('f') resumeForm: NgForm;

  private coverLetter = { coverLetter: '' };
  private applicationContent: any;
  private base64StringImage: String;
  private base64StringResume: String;
  private resumeDocType: string;
  private exceededImageSize: Boolean = false;
  private exceededFileSize: Boolean = false;
  private imageType: String;
  private unacceptedImageType: Boolean = false;
  private unacceptedFileType: Boolean = false;

  constructor() {
    this.coverLetter.coverLetter = `<p>Cover letter here...</p>`
  }

  onSubmit(form: NgForm) {
    
    this.applicationContent = Object.assign({},
      this.resumeForm.value,
      this.coverLetter,
      { image: this.base64StringImage },
      { imageType: this.imageType },
      { resumeDoc: this.base64StringResume },
      { resumeDocType: this.resumeDocType });

    console.log(this.applicationContent);
    // send this.applicationContent to ApplicantSchema endpoint
  }


  /*===========================================
        CONVERTING IMG'S TO BASE64 STRING
    ===========================================*/
  // not a feature people like.. 
  uploadImage(fileEvent) {
    let files = fileEvent.target.files;
    let file = files[0];

    // err when passing in a file with no extension 
    if (files && file && file.size < 500000 &&
      file.type === "image/jpeg" ||
      file.type === "image/png") {

      let fileReader = new FileReader();
      this.unacceptedImageType = false;
      this.imageType = file.type;

      fileReader.onload = this._imageReaderLoaded.bind(this);
      fileReader.readAsBinaryString(file);

    } else if (file.size > 500000) {
        this.exceededImageSize = true;
    } else if (file.type != "image/jpeg" ||
        file.type != "image/png") {
          console.log(file.type)
        this.unacceptedImageType = true;
    }
  }

  _imageReaderLoaded(readerEvt) {
    let binaryString = readerEvt.target.result;

    this.exceededImageSize = false;
    this.base64StringImage = btoa(binaryString);
  };


  /*===========================================
      CONVERTING RESUME FILE TO BASE64 STRING
    ===========================================*/

  uploadResume(fileEvent) {
    let files = fileEvent.target.files;
    let file = files[0];

    if (files && file && file.size < 500000 &&
      file.type === "application/msword" ||
      file.type === "application/pdf" ||
      file.type === "text/plain") {

      let fileReader = new FileReader();
      this.resumeDocType = file.type;
      this.unacceptedFileType = false;

      fileReader.onload = this._resumeReaderLoaded.bind(this);
      fileReader.readAsBinaryString(file);

    } else if (file.size > 500000) {
      this.exceededFileSize = true;

    } else if (file.type !== "application/msword" ||
      file.type !== "application/pdf" ||
      file.type !== "text/plain") {
      this.unacceptedFileType = true;
      console.log('called');
    }
  }

  _resumeReaderLoaded(readerEvt) {
    let binaryString = readerEvt.target.result;

    this.exceededFileSize = false;
    this.base64StringResume = btoa(binaryString);
  };
}
