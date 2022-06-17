import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Count } from 'src/app/models/count.model';
import { User } from 'src/app/models/user.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {

  users:User;
  messages:Count;

  assign = this.getcount();

  constructor(private dataservice:ServiceProvider, private location: Location) { }

  ngOnInit(): void {
    this.getlog();
    this.getcount();
  }

  getlog(){
    this.dataservice.get('getname').subscribe(
      
      user => {
        this.users = user;
        
        
      });   
      return this.users.name 

  }

  getcount(){
    var assignto = this.assign
    
    this.dataservice.get('getcount',null ,assignto ).subscribe(
      message => this.messages= message
    )
    
  }



  logout(){
    
    localStorage.removeItem('token');
    
  }
 
 go(){
   this.location.back();
 }


}

