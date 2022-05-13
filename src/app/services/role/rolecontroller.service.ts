import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roles } from 'src/app/models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RolecontrollerService {

  private roleUrl:string = "http://localhost:6060/role";

  constructor(private http: HttpClient) {
    
   }
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  getRoles():Observable<Roles[]>{
    const url = `${this.roleUrl}/roles`
    return this.http.get<Roles[]>(url)

  }

  addRole(role:Roles):Observable<Roles[]>{
    const url = `${this.roleUrl}/createrole`
    return this.http.post<Roles[]>(url,role, this.httpOptions)
  }
}
