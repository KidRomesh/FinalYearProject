import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentExampleDialogComponent } from '../dialog-content-example-dialog/dialog-content-example-dialog.component';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogContentExampleDialogComponent);
  }
}
