import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Dept } from 'src/app/models/dept.model';
import { Roles } from 'src/app/models/role.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-empteams',
  templateUrl: './empteams.component.html',
  styleUrls: ['./empteams.component.scss']
})
export class EmpteamsComponent implements OnInit {

  depts:Dept[]=[];
  roles: Roles[]=[];

  registerForm = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(8)]),
    lastName : new FormControl ("", [Validators.required, Validators.minLength(8)] ),
    userName : new FormControl ("", [Validators.required, Validators.minLength(8)] ),
    phone : new FormControl ("", [Validators.required, Validators.maxLength(10), Validators.minLength(10)] ),
    email: new FormControl("", Validators.email),
    dept_id: new FormControl("", Validators.required),
    role_id: new FormControl("", Validators.required)
  })

  constructor(private dataservice: ServiceProvider, private location:Location) { }

  ngOnInit(): void {
    this.getDept();
    this.getRoles();
    
  }

  getDept(){
    this.dataservice.get('getdepts', null).subscribe(dept=>this.depts=dept);
  }

  getRoles():void{
    this.dataservice.get('getroles', null ).subscribe(role=>this.roles=role);   
  }




  createEmp():void{
    this.dataservice.post('addFaculty', null, this.registerForm.value)
    .subscribe(()=>this.location.historyGo(0));
    
  }

  create(){
    this.createEmp();
    console.log(this.registerForm.value)
  }




  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get userName() {
    return this.registerForm.get('userName');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get dept_id(){
    return this.registerForm.get('dept_id');
  }
  get role_id(){
    return this.registerForm.get('role_id')
  }
}
