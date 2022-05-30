import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MaxLengthValidator } from '@angular/forms';
import * as $ from 'jquery';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.scss']
})
export class CreatestudentComponent implements OnInit {
  datasaved: false;
  students: Student[] = [];
  

  registerForm = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    lastName: new FormControl("",[Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    phone: new FormControl("", Validators.maxLength(10)),
    email: new FormControl("", Validators.email),
    userName: new FormControl("",  [Validators.minLength(8), Validators.maxLength(15)]),
    password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    confpass: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    bloodgroup: new FormControl("", Validators.required),
    dob: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    ug: new FormControl(""),
    pg: new FormControl(""),
    hsc: new FormControl(""),
    sslc: new FormControl("")


  });
  constructor() { }

  ngOnInit(): void {
    $(function () {
      $("input[name='chkPassPort']").click(function () {
        if ($("#chkYes").is(":checked")) {
          $("#dvug").show();
          $("#dvpg").hide();
        } else {
          $("#dvug").hide();
          $("#dvpg").show();
        }
      });
    });
  }

  submit() {

    console.log(this.registerForm.value);

    
  }



  get userName() {
    return this.registerForm.get('userName')
  }
  get password() {
    return this.registerForm.get('password')
  }
  get firstName() {
    return this.registerForm.get('firstName')
  }
  get lastName() {
    return this.registerForm.get('lastName')
  }
  get phone() {
    return this.registerForm.get('phone')
  }
  get email() {
    return this.registerForm.get('email')
  }
  get address() {
    return this.registerForm.get('address')
  }
  get dob() {
    return this.registerForm.get('dob')
  }
  get bloodgroup() {
    return this.registerForm.get('bloodgroup')
  }
  get gender() {
    return this.registerForm.get('gender')
  }
  get ug() {
    return this.registerForm.get('ug')
  }
  get pg() {
    return this.registerForm.get('pg')
  }
  get hsc() {
    return this.registerForm.get('hsc')
  }
  get sslc() {
    return this.registerForm.get('sslc')
  }

  get confpass(){
    return this.registerForm.get('confpass')
  }

}
