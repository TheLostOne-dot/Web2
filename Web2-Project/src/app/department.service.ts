import { Injectable } from '@angular/core';
import {Department} from './department';
import {DEPARTMENTS} from './mock-departments';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  getDepartments(): Observable<Department[]> {
    return of(DEPARTMENTS);
  }
  
  constructor() { }
 
}
