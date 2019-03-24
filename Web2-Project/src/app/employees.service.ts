import { Injectable } from '@angular/core';
import { Employee } from './employees';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, Route } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http: HttpClient, private router: Router) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://i875395.hera.fhict.nl/api/386275/employee');
  }

  getEmployee(id: number): Observable<Employee> {

    return this.http.get<Employee>('http://i875395.hera.fhict.nl/api/386275/employee?id=' + id);
  }

  

}