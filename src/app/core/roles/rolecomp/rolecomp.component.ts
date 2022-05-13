import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/models/role.model';
import { RolecontrollerService } from 'src/app/services/role/rolecontroller.service';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-rolecomp',
  templateUrl: './rolecomp.component.html',
  styleUrls: ['./rolecomp.component.scss']
})
export class RolecompComponent implements OnInit {
  
roles:Roles[]=[]
  
  constructor(private rolecontrol:RolecontrollerService, private dataservice: ServiceProvider) { }

  ngOnInit(): void {
    this.getRoles()
    
  }
  // getRoles(): void {
  //   this.rolecontrol.getRoles()
  //   .subscribe(role  => {this.roles = role});
  // }
  getRoles():void{
    this.dataservice.get('getroles', null )
    .subscribe(role=>
      {
        this.roles=role
      });
    
  }
}
