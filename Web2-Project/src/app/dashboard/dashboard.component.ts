import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees';
import { EmployeesService } from '../employees.service';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees: Employee[] = [];
  departments: Department[] = [];
  constructor(private employeeService: EmployeesService,private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getEmployees();
    this.getDepartments();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }
  getDepartments(): void{
    this.departmentService.getDepartments()
    .subscribe(departments => this.departments = departments);
  }
}
