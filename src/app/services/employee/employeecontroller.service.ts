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



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    private log(message: string) {
      console.log(message);
    }
    
    addHero(emp: Employee): Observable<Employee> {
      const url = `${this.empUrl}/login`;
      return this.http.post<Employee>(url, emp, this.httpOptions)
    }
  

}