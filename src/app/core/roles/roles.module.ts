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

import { RolesRoutingModule } from './roles-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RolesComponent } from './roles.component';
import { RolecompComponent } from './rolecomp/rolecomp.component';
import { CreaterolesComponent } from './createroles/createroles.component';

@NgModule({
  declarations: [
    RolesComponent,
    RolecompComponent,
    CreaterolesComponent,
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
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
    ReactiveFormsModule,
  ]
})
export class RolesModule { }
