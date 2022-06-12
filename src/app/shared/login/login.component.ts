import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employee: Employee[] = [];
  registerForm = new FormGroup({
    userName: new FormControl("", [Validators.required, Validators.minLength(8)]),
    password: new FormControl("", Validators.required),
  });

  constructor( private router: Router, private dataservice: ServiceProvider) { }

  ngOnInit(): void {


  }

  show_button: Boolean = false;
  show_eye: Boolean = false;

  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }


  login() {
    this.dataservice.post('signin', null, this.registerForm.value).subscribe((res)=>{

      if(res['token']){
        localStorage.setItem('token', res['token']);
        this.router.navigate(['home']);
      }
    });
  }


  get userName() {
    return this.registerForm.get('userName')
  }
  get password() {
    return this.registerForm.get('password')
  }
}
