import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TasksModule } from './tasks/tasks.module';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    DashboardRoutingModule,
    TasksModule
  ]
})
export class DashboardModule { }
