import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, map, of } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeecontrollerService {

  constructor(private http: HttpClient) { }
  private empUrl = 'localhost:6060/employee';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


    
    login(emp: Employee): Observable<Employee> {
      const url = `${this.empUrl}/login`;
      return this.http.post<Employee>(url, emp, this.httpOptions)
    }
  

}