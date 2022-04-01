import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpteamsComponent } from './empteams/empteams.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmplistComponent,
    EmpteamsComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
  ]
})
export class EmployeesModule { }
