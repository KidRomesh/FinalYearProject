import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-createmodal',
  templateUrl: './createmodal.component.html',
  styleUrls: ['./createmodal.component.scss']
})
export class CreatemodalComponent implements OnInit {

  users: User;

  constructor(private dataservice : ServiceProvider) { }

  ngOnInit(): void {
    this.getlog()
  }

  getlog(){
    this.dataservice.get('getname').subscribe(
      
      user => {
        this.users = user;
      });    

  }
}
