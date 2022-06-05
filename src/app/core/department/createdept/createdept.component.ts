import { Location } from '@angular/common';
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

  

  constructor(private dataservice: ServiceProvider, private location : Location) { }

  ngOnInit(): void {
  }


  add() {
    this.dataservice.post('adddept',null, this.form.value).subscribe(()=>
      this.location.historyGo(0)
    )
  }

  

  addDept(){
    this.add();
    console.log(this.form.value);
  }

  get deptName(){
    return this.form.get('deptName');
  }
  get isActive(){
    return this.form.get('isActive');
  }


}
