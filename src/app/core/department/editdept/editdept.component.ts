import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { deptUp } from 'src/app/models/deptUp.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-editdept',
  templateUrl: './editdept.component.html',
  styleUrls: ['./editdept.component.scss']
})
export class EditdeptComponent implements OnInit {

  dept: deptUp;

  constructor(private dataservice: ServiceProvider, private route: ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.getDept();
  }

  getDept(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.dataservice.get('getdeptid', null, id).subscribe(
      depts => {
        this.dept = depts
        console.log("Iam from frontend", this.dept);
      });
  }

  save(){
    if (this.dept){
      this.dataservice.put('updatedept', null, this.dept).subscribe(()=>
        this.location.historyGo(-1)
      );
    }
    
  }

  goBack(){
    this.location.back();
  }

}
