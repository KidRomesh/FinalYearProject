import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students : Student[]=[];

  constructor(private dataservice :ServiceProvider) { }

  ngOnInit(): void {
    this.getstudents();
  }

  getstudents(){
    this.dataservice.get('getstudents', null).subscribe(
      student =>this.students=student)
  }

}
