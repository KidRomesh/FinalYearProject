import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatToolbarModule}from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatCommonModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    SharedComponent,
    NavComponent,
    LoginComponent,
   
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
