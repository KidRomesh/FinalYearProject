import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      $("input[name='chkPassPort']").click(function () {
          if ($("#chkYes").is(":checked")) {
              $("#dvug").show();
              $("#dvpg").hide();
          } else {
              $("#dvug").hide();
              $("#dvpg").show();
          }
      });
  });
  }

}
