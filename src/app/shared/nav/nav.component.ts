import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  message: number= 3;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  go(){
    this.router.navigate(['/dep']);
  }
 


}
