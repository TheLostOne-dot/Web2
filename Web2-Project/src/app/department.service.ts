import { Injectable } from '@angular/core';
import {Department} from './department';
import {DEPARTMENTS} from './mock-departments';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }
  getDepartments(): Observable<Department[]> {
    return of(DEPARTMENTS);
  }
  getDepartment(id: number): Observable<Department>{
   
    return of (DEPARTMENTS.find(department => department.id === id));
  }
}
