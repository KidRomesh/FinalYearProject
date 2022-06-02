import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { update } from 'src/app/models/update.model';
import { ServiceProvider } from 'src/app/services/service.provider';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  roles: update;

  constructor(private snackBar: MatSnackBar, private dataservice: ServiceProvider, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getrole();
  }


  getrole() {
    const id: string = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    this.dataservice.get('getroleid', null, id).subscribe(
      role => {
        this.roles = role
        console.log("Iam from frontend", this.roles);
      });

  }
  openSnackBar(message: string) {
    this.snackBar.open(message.toString(), '', {
      duration: 5000
    });
  }

  delete(): void {
    if (this.roles) {
      const id: string = this.route.snapshot.paramMap.get('id');
      this.dataservice.delete('deleterole', id)
        .subscribe(() =>{
          console.log("Successs")
        } );
        this.location.historyGo(-1) 

    }
    this.openSnackBar('Sucessfully Deleted')
  }

  goBack(): void {
    this.location.back();
  }


}
