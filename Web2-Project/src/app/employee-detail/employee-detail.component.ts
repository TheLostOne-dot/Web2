import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { Observable, of } from 'rxjs';

import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;
  departments$: Observable<Department[]>;

  constructor(private route: ActivatedRoute,
    private employeeService: EmployeesService,
    private location: Location, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getEmployee();
    this.departments$ = this.departmentService.getDepartments();
  }
  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
  }

  save(employee: Employee): void {
    this.employeeService.updateEmployee(employee);
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }
}
