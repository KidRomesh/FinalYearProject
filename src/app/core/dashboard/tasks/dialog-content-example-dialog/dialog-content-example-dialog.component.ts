import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.scss']
})
export class DialogContentExampleDialogComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
  }
  openSnackBar(message: string)
    {
      this.snackBar.open(message.toString(),'',{
        duration:3000
      });
    }

}
