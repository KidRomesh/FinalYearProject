import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/models/role.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-rolecomp',
  templateUrl: './rolecomp.component.html',
  styleUrls: ['./rolecomp.component.scss']
})
export class RolecompComponent implements OnInit {
  
roles:Roles[]=[]
  
  constructor( private dataservice: ServiceProvider) { }

  ngOnInit(): void {
    this.getRoles()
    
  }

  getRoles():void{
    this.dataservice.get('getroles', null )
    .subscribe(role=>
      {
        this.roles=role
      });
    
  }


}

