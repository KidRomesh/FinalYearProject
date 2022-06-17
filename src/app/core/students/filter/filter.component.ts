import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Dept } from 'src/app/models/dept.model';
import { Student } from 'src/app/models/student.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  depts: Dept[] = [];
  students: Student[] = [];

    dept = new FormControl('')
    rollno = new FormControl('')


  constructor(private dataservice: ServiceProvider) { }

  ngOnInit(): void {
    this.getDept();
  }



  query() {
    this.dataservice.get('getbydept', null, this.dept.value).subscribe(
      student => {
        this.students = student;
        console.log(this.students) ;
      }
    )


  }

  getDept() {
    this.dataservice.get('getdepts', null).subscribe(dept => this.depts = dept);
  }

}
