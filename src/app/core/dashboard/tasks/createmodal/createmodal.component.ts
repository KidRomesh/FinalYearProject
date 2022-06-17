import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-createmodal',
  templateUrl: './createmodal.component.html',
  styleUrls: ['./createmodal.component.scss']
})
export class CreatemodalComponent implements OnInit {

  form = new FormGroup({
    from: new FormControl("{{users.name}}"),
    status: new FormControl("", Validators.required),
    due : new FormControl(""),
    assignto :new FormControl("", Validators.required),
    task : new FormControl("", Validators.required),
    comments : new FormControl("")


  });

  users: User;

  constructor(private dataservice : ServiceProvider, private location: Location) { }

  ngOnInit(): void {
    this.getlog()
  }

  getlog(){
    this.dataservice.get('getname').subscribe(
      
      user => {
        this.users = user;
      });    

  }

  addTask(){
    this.dataservice.post ('addtask', null, this.form.value).subscribe(
      ()=>{
        this.location.historyGo(0);
      }
    )
    console.log(this.form.value)
  }

  get assignto() {
    return this.form.get('assignto');
  }
  get status() {
    return this.form.get('status');
  }
  get task() {
    return this.form.get('task');
  }


}
