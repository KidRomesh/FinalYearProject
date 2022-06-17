import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-rmc',
  templateUrl: './rmc.component.html',
  styleUrls: ['./rmc.component.scss']
})
export class RmcComponent implements OnInit {

  students: Student;

  constructor(private snackBar: MatSnackBar, private dataservice: ServiceProvider, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getstudent();
  }


  getstudent() {
    const id: string = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    this.dataservice.get('stubyid', null, id).subscribe(
      student => {
        this.students = student
      });

  }
  openSnackBar(message: string) {
    this.snackBar.open(message.toString(), '', {
      duration: 5000
    });
  }

  delete(): void {
    if (this.students) {
      const id: string = this.route.snapshot.paramMap.get('id');
      this.dataservice.delete('deleteStu', id)
        .subscribe(() =>{
          console.log("Success");
        } );
        this.location.historyGo(-1) 

    }
    this.openSnackBar('Sucessfully Deleted')
  }

  goBack(): void {
    this.location.back();
  }
}
