import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  selectedEmployee: Employee;
  employees: Employee[];

  constructor(private employeeService: EmployeesService) { }

  firstName = "";
  lastName = "";
  empId = 3;

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  ngOnInit() {
    this.getEmployees();
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
  onClick(firstName,lastName) {
    this.employees.push(new Employee(this.empId = this.empId + 1, firstName, lastName))
  }
  onRemove(employee: Employee): void {
    const index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);

  }

}
