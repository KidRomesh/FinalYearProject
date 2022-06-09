import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceConfig } from './service.url.config';

@Injectable({
  providedIn: 'root'
})

export class ServiceProvider {
  serviceUrl: any;
  serviceTypeList: any;
  constructor(
    private http: HttpClient,
    private serviceConfig: ServiceConfig,
  ) { }

  // Http Headers
  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })
  };

  buildPreCall(endPoint: string, queryParams?: any, pathVar?: any){
    this.httpOptions.params = new HttpParams();
    this.serviceTypeList = this.serviceConfig.services;

    var token = localStorage.getItem('token');

    // console.log(localStorage.getItem('token'))
  
    if (pathVar === undefined || pathVar == null) {
      this.serviceUrl = this.serviceTypeList[endPoint].url;
    } else {
      this.serviceUrl = this.serviceTypeList[endPoint].url + pathVar;
    }
    if (this.serviceTypeList[endPoint].authorization) {
      // console.log(this.serviceTypeList[endPoint].authorization);
      this.httpOptions.headers = this.httpOptions.headers.set('authorization', `Bearer ${token}`);
    } else {
      this.httpOptions.headers = this.httpOptions.headers.set('authorization', ' ');
      this.httpOptions.headers.delete('authorization', ' ');
    }
    if (queryParams) {
      for (const key of Object.keys(queryParams)) {
        this.httpOptions.params = this.httpOptions.params.set(key, queryParams[key]);
      }
    }
    return {url: this.serviceUrl, options: this.httpOptions}
    
  }

  get(endPoint: string, queryParams?: any, pathVar?: any): Observable<any> {
   let service_options = this.buildPreCall(endPoint, queryParams, pathVar)
    return this.http.get(service_options.url, service_options.options);
  }

  post(endPoint: string, urlParams ?: string | number | null, body?: any): Observable<any> {
    let service_options = this.buildPreCall(endPoint, null, urlParams)
    return this.http.post(service_options.url, body, service_options.options);
  }

  put(endPoint: string, urlParams ?: string | number, body?: any): Observable<any> {
    let service_options = this.buildPreCall(endPoint, null, urlParams)
    return this.http.put(service_options.url, body, service_options.options);
  }

  delete(endPoint: string, urlParams ?: string | number): Observable<any> {
    let service_options = this.buildPreCall(endPoint, null, urlParams)
    return this.http.delete(service_options.url, service_options.options);
  }
}