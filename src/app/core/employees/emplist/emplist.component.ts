import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.scss']
})
export class EmplistComponent implements OnInit {

  emps:Employee[]=[];


  constructor(private dataservice: ServiceProvider) { }

  ngOnInit(): void {
    this.getEmp();
  }

  getEmp(){
    this.dataservice.get('getFaculty').subscribe(emp=>this.emps=emp);
  }



}
