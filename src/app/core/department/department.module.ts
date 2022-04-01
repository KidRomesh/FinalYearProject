import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


import { KeyValueFilterPipe } from 'src/app/pipes/key-value-filter.pipe';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { DeptComponent } from './dept/dept.component';


@NgModule({
  declarations: [
    DepartmentComponent,
    KeyValueFilterPipe,
    DeptComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule
  ]
})
export class DepartmentModule { }
