import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{

  public http;
  public studentList:any;
  public selectedStudent:any;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent() {
    this.http.get("http://localhost:8080/student")
      .subscribe((data) => {
        console.log("This is return Data" + data);

        this.studentList = data;
      })
  }

  public removeStudent(){
    // console.log(studentList);

    let apiurl = "http://localhost:8080/student/" + this.selectedStudent.studentid

    this.http.delete(apiurl)
    .subscribe(data => {
      console.log(data);
      this.loadStudent();
      this.selectedStudent = null;
    })
  }

  setSelectedStudent(student:any){
    this.selectedStudent = student;
  }

  createStudent() {
    this.http.post("http://localhost:8080/student", this.selectedStudent)
      .subscribe(data => {
        this.selectedStudent = {};
        this.loadStudent();
      })
  }

}
