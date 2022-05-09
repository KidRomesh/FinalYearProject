import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatToolbarModule}from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatCommonModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MessageComponent } from './message/message.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SharedComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    MessageComponent,
   
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
    MatInputModule,
    MatMenuModule,
    MatStepperModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule
  ]
})
export class SharedModule { }
