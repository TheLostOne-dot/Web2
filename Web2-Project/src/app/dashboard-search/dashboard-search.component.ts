import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
 
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { EmployeesService } from '../employees.service';
import { Employee } from '../employees';
import { Task } from '../task';
import { TasksService } from '../tasks.service'
@Component({
  selector: 'app-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.css']
})
export class DashboardSearchComponent implements OnInit {
  employees$: Observable<Employee[]>;
  tasks$: Observable<Task[]>;
  departments$: Observable<Department[]>;
  private searchTerms = new Subject<string>();
  constructor(private employeeService: EmployeesService,private tasksService: TasksService,private departmentService: DepartmentService) { }




  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.departments$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.departmentService.searchDepartments(term)),
    );

    this.employees$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.employeeService.searchEmployees(term)),
    );

    this.tasks$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.tasksService.searchTasks(term)),
    );
  }
}

