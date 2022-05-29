import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { update } from 'src/app/models/update.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  roles: update;


  constructor(private dataservice: ServiceProvider, private route:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.getrole();
  }
 

  getrole(){
    const id: string = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    this.dataservice.get('getroleid',null, id).subscribe(
      role => {
        this.roles = role
        console.log("Iam from frontend", this.roles);
      });
    
  }

  save(): void {
    if (this.roles) {
      this.dataservice.put('updaterole' ,null, this.roles)
        .subscribe(() => this.location.historyGo(-1));
        
    }
  }

  goBack(): void {
    this.location.back();
  }


}
