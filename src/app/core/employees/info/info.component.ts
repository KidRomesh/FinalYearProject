import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bg } from 'src/app/models/bg.model';
import { Dept } from 'src/app/models/dept.model';
import { Employee } from 'src/app/models/employee.model';
import { Gender } from 'src/app/models/gender.model';
import { Roles } from 'src/app/models/role.model';
import { ServiceProvider } from 'src/app/services/service.provider';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  emps:Employee;
  depts:Dept[]=[];
  roles: Roles[]=[];


  constructor(private route : ActivatedRoute, private dataservice : ServiceProvider, private location: Location) { }

  ngOnInit(): void {
    this.getEmp();
    this.getDept();
    this.getRoles();
  }
  

  getDept(){
    this.dataservice.get('getdepts', null).subscribe(dept=>this.depts=dept);
  }

  getRoles():void{
    this.dataservice.get('getroles').subscribe(role=>this.roles=role);
       
  }



  getEmp(){
    const id : string = this.route.snapshot.paramMap.get('id');
    this.dataservice.get('empbyid', null, id).subscribe(
      emp =>{
        this.emps = emp;
        
      });


  }

  save(){
    if(this.emps){
      this.dataservice.put('updateEmp', null , this.emps).subscribe(()=>
      this.location.historyGo(-1));
    }
  }

  
  goBack(){
    this.location.back();
  }

}
