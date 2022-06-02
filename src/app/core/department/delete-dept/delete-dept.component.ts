import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { deptUp } from 'src/app/models/deptUp.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-delete-dept',
  templateUrl: './delete-dept.component.html',
  styleUrls: ['./delete-dept.component.scss']
})
export class DeleteDeptComponent implements OnInit {

  dept: deptUp


  constructor(
    private snackBar: MatSnackBar,
    private dataservice: ServiceProvider,
    private router: ActivatedRoute,
    private location: Location) { }



  ngOnInit(): void {
    this.getDept();
  }

  getDept(): void {
    const id: any = this.router.snapshot.paramMap.get('id');
    this.dataservice.get('getdeptid', null, id).subscribe(
      depts => {
        this.dept = depts
        console.log("Iam from frontend", this.dept);
      });
  }


  openSnackBar(message: string) {
    this.snackBar.open(message.toString(), '', {
      duration: 5000
    });
  }


  delete(): void {
    if (this.dept) {
      const id: any = this.router.snapshot.paramMap.get('id');
      this.dataservice.delete('deletedept', id).subscribe(
        () => { console.log('Success') }
      );
      this.location.historyGo(-1)
    }
    this.openSnackBar('Successfully Deleted');

  }

  goBack() {
    this.location.back();
  }

}
