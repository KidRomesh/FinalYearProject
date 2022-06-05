import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { ServiceProvider } from 'src/app/services/service.provider';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  emps:Employee;

  constructor(private route : ActivatedRoute, private dataservice : ServiceProvider) { }

  ngOnInit(): void {
    this.getEmp();
  }

  getEmp(){
    const id : string = this.route.snapshot.paramMap.get('id');
    this.dataservice.get('empbyid', null, id).subscribe(
      emp =>{
        this.emps = emp;
      });
  }

  save(){
    console.log("hai broski")
  }

}
