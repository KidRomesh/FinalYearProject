import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Location } from '@angular/common';
import { Student } from 'src/app/models/student.model';
import { EmployeecontrollerService } from 'src/app/services/employee/employeecontroller.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  students: Student[] = [];
  datasaved = false;

  registerForm = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.minLength(10)),
    email: new FormControl("", Validators.email),
    userName: new FormControl("", Validators.maxLength(20)),
    password: new FormControl("", [Validators.required, Validators.maxLength(18)]),
    address: new FormControl("", Validators.required),
    bloodgroup: new FormControl("", Validators.required),
    dob: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    ug: new FormControl("", Validators.required),
    pg: new FormControl("", Validators.required),
    hsc: new FormControl("", Validators.required),
    sslc: new FormControl("", Validators.required)


  });



  constructor( private location: Location, private router: Router, private stucor: EmployeecontrollerService) { }

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
    this.add(
      this.userName?.value,
      this.password?.value,
      this.firstName?.value,
      this.lastName?.value,
      this.phone?.value,
      this.email?.value,
      this.address?.value,
      this.bloodgroup?.value,
      this.dob?.value,
      this.gender?.value,
      this.hsc?.value,
      this.sslc?.value,
      this.ug?.value,
      this.pg?.value
    );
    
  }

  add(
    firstName: string,
    lastName: string,
    phone: number,
    email: string,
    userName: string,
    password: string,
    address: string,
    bloodgroup: string,
    dob: string,
    gender: string,
    pg: string,
    ug: string,
    hsc: string,
    sslc: string,

  ): void {
   
    if (!firstName) { return; }
    this.stucor.signup({
      firstName, lastName, userName, password, phone, email,
      address,
      bloodgroup,
      dob,
      gender,
      pg,
      ug,
      hsc,
      sslc
    } as Student)
    .subscribe(student=> {
      this.students.push(student);
      this.location.back();
      console.log("Iam from register", student);   
    });

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


}
