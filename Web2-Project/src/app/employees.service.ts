import { Injectable } from '@angular/core';
import { Employee } from './employees';
import { EMPLOYEES } from './mock-employees';
import { Observable, of } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEES);
  }

  constructor() { }

}
