import { Component, OnInit } from '@angular/core';
import { Dept } from 'src/app/models/dept.model.';
import { DeptcontrollerService } from 'src/app/services/dept/deptcontroller.service';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.scss']
})
export class DeptComponent implements OnInit {

  depts:Dept[]=[];
  constructor(private deptControl: DeptcontrollerService) { }

  ngOnInit(): void {
    this.getDept()
    
  }
  getDept(): void {
    this.deptControl.getDepts()
    .subscribe(hero => this.depts = hero);
  }


}
