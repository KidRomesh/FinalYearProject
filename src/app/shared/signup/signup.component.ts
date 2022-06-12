import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Student } from 'src/app/models/student.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  datasaved: false;
  students: Student[] = [];


  registerForm = new FormGroup({

    userName: new FormControl("", [Validators.minLength(8), Validators.maxLength(15)]),
    password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(15)])

  });



  constructor(private dataservice: ServiceProvider, private router: Router) { }

  ngOnInit(): void {

  }

  login() {
    console.log(this.registerForm.value)
    this.dataservice.post('login', null, this.registerForm.value).subscribe((res) => {
      if (res['token']) {
        localStorage.setItem('token', res['token']);
        this.router.navigate(['home']);
      }
    });
  }

  show_button: Boolean = false;
  show_eye: Boolean = false;

  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }



  get userName() {
    return this.registerForm.get('userName')
  }
  get password() {
    return this.registerForm.get('password')
  }

}
