import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NotificationComponent } from './notification/notification.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    NotificationComponent,
    DialogContentExampleDialogComponent
  ],
  entryComponents:[DialogContentExampleDialogComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class TasksModule { }
