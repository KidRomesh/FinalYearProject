import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpteamsComponent } from './empteams/empteams.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfoComponent } from './info/info.component';
import { RemoveComponent } from './remove/remove.component';



@NgModule({
  
  declarations: [
    EmployeesComponent,
    EmplistComponent,
    EmpteamsComponent,
    InfoComponent,
    RemoveComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    FormsModule
  ],

})
export class EmployeesModule { }
