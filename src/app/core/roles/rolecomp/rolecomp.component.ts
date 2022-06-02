import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Roles } from 'src/app/models/role.model';
import { ServiceProvider } from 'src/app/services/service.provider';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-rolecomp',
  templateUrl: './rolecomp.component.html',
  styleUrls: ['./rolecomp.component.scss']
})
export class RolecompComponent implements OnInit {
  
roles:Roles[]=[]
  
  constructor( private dataservice: ServiceProvider, public dialog:MatDialog) { }

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

