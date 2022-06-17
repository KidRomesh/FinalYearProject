import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Dept } from 'src/app/models/dept.model';
import { Roles } from 'src/app/models/role.model';
import { Student } from 'src/app/models/student.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  depts:Dept[]=[];
  students : Student;


  constructor(private route : ActivatedRoute, private dataservice : ServiceProvider, private location:Location) { }

  ngOnInit(): void {
    this.getstudent();
    this.getDept();
  }
  

  getDept(){
    this.dataservice.get('getdepts', null).subscribe(dept=>this.depts=dept);
  }





  getstudent(){
    const id : string = this.route.snapshot.paramMap.get('id');
    this.dataservice.get('stubyid', null, id).subscribe(
      emp =>{
        this.students = emp;
        
      });


  }

  save(){
    if(this.students){
      this.dataservice.put('updateStu', null , this.students).subscribe(()=>
      this.location.historyGo(-1));
    }
  }

  
  goBack(){
    this.location.back();
  }


}
