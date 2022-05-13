import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Roles } from 'src/app/models/role.model';
import { RolecontrollerService } from 'src/app/services/role/rolecontroller.service';
import { ServiceProvider } from 'src/app/services/service.provider';


@Component({
  selector: 'app-createroles',
  templateUrl: './createroles.component.html',
  styleUrls: ['./createroles.component.scss']
})
export class CreaterolesComponent implements OnInit {

  roles: Roles[] = [];

  form = new FormGroup({
    Designation: new FormControl("", [Validators.required, Validators.minLength(3)]),
    isActive: new FormControl("", Validators.required),
    isEligible: new FormControl("", Validators.required),

  });


  constructor( private dataservice : ServiceProvider) { }

  ngOnInit(): void {
  }


  add(
    Designation: string,
    isActive: boolean,
    isEligible: boolean) {
    this.dataservice.post('addrole',null,this.form.value).subscribe(role => { 
      this.roles.push({ Designation, isActive, isEligible }); 
      console.log("Role created successfully",role); 
    });

  }

  addRoles() {
    this.add(this.Designation?.value, this.isActive?.value, this.isEligible?.value);
  }

  get Designation() {
    return this.form.get('Designation');
  }
  get isActive() {
    return this.form.get('isActive');
  }
  get isEligible() {
    return this.form.get('isEligible');

  }

}
