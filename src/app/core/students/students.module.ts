import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { SharedRoutingModule } from 'src/app/shared/shared-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    StudentsComponent,
    CreatestudentComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    CommonModule,
    SharedRoutingModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatChipsModule,
    MatCommonModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class StudentsModule { }
