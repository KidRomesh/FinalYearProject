import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Dept } from 'src/app/models/dept.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-createdept',
  templateUrl: './createdept.component.html',
  styleUrls: ['./createdept.component.scss']
})
export class CreatedeptComponent implements OnInit {

  form = new FormGroup({
    deptName: new FormControl("", [Validators.required,Validators.minLength(3)]),
    isActive: new FormControl("", Validators.required),
  });

  depts:Dept[]=[];

  constructor(private dataservice: ServiceProvider) { }

  ngOnInit(): void {
  }


  add(
    deptName: string,
    isActive: boolean,) {
    this.dataservice.post('adddept',null, this.form.value)
      .subscribe(dept => {
        this.depts.push({deptName, isActive});
        console.log("Dept created succesfully", dept);
      });

  }

  addDept(){
    this.add(this.deptName?.value, this.isActive?.value);
    console.log(this.form.value);
  }

  get deptName(){
    return this.form.get('deptName');
  }
  get isActive(){
    return this.form.get('isActive');
  }


}
