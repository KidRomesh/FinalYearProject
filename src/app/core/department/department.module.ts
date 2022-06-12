import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { DeptComponent } from './dept/dept.component';
import { CreatedeptComponent } from './createdept/createdept.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditdeptComponent } from './editdept/editdept.component';
import { DeleteDeptComponent } from './delete-dept/delete-dept.component';


@NgModule({
  declarations: [
    DepartmentComponent,
    DeptComponent,
    CreatedeptComponent,
    EditdeptComponent,
    DeleteDeptComponent,
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class DepartmentModule { }
