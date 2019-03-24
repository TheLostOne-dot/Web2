import { Injectable } from '@angular/core';
import {Department} from './department';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient,private router:Router) { }
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>('http://i386275.hera.fhict.nl/api/department/read.php');
  }
  getDepartment(id: number): Observable<Department>{
   
    return this.http.get<Department>('http://i386275.hera.fhict.nl/api/387277/department?id=' + id);
  }
}
