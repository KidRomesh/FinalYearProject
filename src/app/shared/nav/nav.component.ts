import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {

  users:User;
  message: number= 3;

  constructor(private dataservice:ServiceProvider, private location: Location) { }

  ngOnInit(): void {
    this.getlog();
  }

  getlog(){
    this.dataservice.get('getname').subscribe(
      
      user => {
        this.users = user;
        console.log("Iam from frontend", this.users);
      });    

  }



  logout(){
    
    localStorage.removeItem('token');
    
  }
 
 go(){
   this.location.back();
 }


}

