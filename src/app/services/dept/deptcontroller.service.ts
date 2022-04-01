import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dept } from 'src/app/models/dept.model.';

@Injectable({
  providedIn: 'root'
})
export class DeptcontrollerService {
  private deptUrl:string = "http://localhost:6060/dept";

  constructor(private http: HttpClient) {
    
   }
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  getDepts():Observable<Dept[]>{
    const url = `${this.deptUrl}/depts`
    return this.http.get<Dept[]>(url)
    

  }

  


}
