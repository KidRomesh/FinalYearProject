import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'

import { CreatestudentComponent } from './createstudent/createstudent.component';
import { StudentComponent } from './student/student.component';
import { SharedModule } from 'src/app/shared/shared.module';





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
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class StudentsModule { }
