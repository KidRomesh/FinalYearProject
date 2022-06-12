import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss']
})
export class RemoveComponent implements OnInit {

  emps:Employee;

  constructor(private snackBar: MatSnackBar,private route : ActivatedRoute, private dataservice : ServiceProvider, private location: Location ) { }

  ngOnInit(): void {
    this.getEmp();
  }

  getEmp(){
    const id = this.route.snapshot.paramMap.get('id');
    this.dataservice.get('empbyid', null, id).subscribe(
      emp =>{
        this.emps = emp;
        
      });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message.toString(), '', {
      duration: 5000
    });
  }

  delete(): void {
    if (this.emps) {
      const id: any = this.route.snapshot.paramMap.get('id');
      this.dataservice.delete('deleteEmp', id).subscribe(
        () => { console.log("Success"); }
      );
      this.location.historyGo(-1);  
    }
    this.openSnackBar('Successfully Deleted');
  }

  goBack() {
    this.location.back();
  }
}
