import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Dept } from 'src/app/models/dept.model.';
import { DeptcontrollerService } from 'src/app/services/dept/deptcontroller.service';



@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})


export class DepartmentComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }
}
