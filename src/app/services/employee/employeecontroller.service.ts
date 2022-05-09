import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, map, of, throwError } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeecontrollerService {

  constructor(private http: HttpClient) { }
  private empUrl = 'http://localhost:6060/student';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


    
    login(emp: Employee): Observable<Employee> {
      const url = `${this.empUrl}/login`;
      return this.http.post<Employee>(url, emp, this.httpOptions)
  
    }

    signup(student: Student):Observable<Student>{
      const url=`${this.empUrl}/signup`;
      return this.http.post<Student>(url, student, this.httpOptions)
    }
  
   
}