import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { ServiceProvider } from 'src/app/services/service.provider';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  tasks : Task[]=[];

  constructor(private dataservice: ServiceProvider) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.dataservice.get('gettasks',null).subscribe(task=>this.tasks= task)
  }
 
}


