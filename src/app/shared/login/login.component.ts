import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employee: Employee[] = [];
  registerForm = new FormGroup({
    userName: new FormControl("", [Validators.required,]),
    password: new FormControl("", Validators.required),
  });

  constructor( private router: Router) { }

  ngOnInit(): void {


  }

  show_button: Boolean = false;
  show_eye: Boolean = false;

  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }


  login() {

    this.router.navigate(['Home'])
  }


  get userName() {
    return this.registerForm.get('userName')
  }
  get password() {
    return this.registerForm.get('password')
  }
}
