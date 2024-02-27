import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private http;
  public isSubmissionDisabled = false;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  public recentsavedStudent:any;

  public student = {
    // id:null,
    firstName: null,
    lastName: null,
    contactNumber: null
  }

  createStudent() {

    if (this.student.contactNumber == null || this.student.contactNumber == ""){
      return;
    }

    this.recentsavedStudent = null;

    this.isSubmissionDisabled = true;
    // console.log("Before submitting form:", this.student);
    this.http.post("http://localhost:8080/student", this.student)
      .subscribe(data => {
        this.isSubmissionDisabled = false;
        console.log("Response from server:", data);
        this.recentsavedStudent = data;

        this.student = {
          // id:null,
          firstName: null,
          lastName: null,
          contactNumber: null
        }
      })
  }
}

