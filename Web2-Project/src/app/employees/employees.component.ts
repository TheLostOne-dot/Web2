import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  selectedEmployee: Employee;
  employees: Employee[];
  departments: Department[];
  employee: Employee = new Employee();
  message: string;
  departments$: Observable<Department[]>;

  constructor(private employeeService: EmployeesService, private departmentService: DepartmentService) { }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  ngOnInit() {
    this.getEmployees();
    this.departments$ = this.departmentService.getDepartments();
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
  onClick(): void {
    this.employeeService.addEmployee(this.employee);
    this.employee = new Employee();
    this.message = "Succesfuly created";
    this.refresh();
  }
  onRemove(employee: Employee): void {
    this.employeeService.deleteEmployee(employee);
    const index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);

  }
  refresh(): void {
    window.location.reload();
  }
}
