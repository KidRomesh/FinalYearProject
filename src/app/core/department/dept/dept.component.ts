import { Component, OnInit } from '@angular/core';
import { Dept } from 'src/app/models/dept.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.scss']
})
export class DeptComponent implements OnInit {


  depts:Dept[]=[];
  constructor(private dataservice: ServiceProvider) { }

  ngOnInit(): void {
    this.getDept()
    
  }
  // getDept(): void {
  //   this.deptControl.getDepts()
  //   .subscribe(hero => this.depts = hero);
  // }

  getDept(){
    this.dataservice.get('getdepts', null).subscribe(dept=>this.depts=dept);
  }



 }
