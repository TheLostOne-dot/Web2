import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees';
import { EMPLOYEES } from '../mock-employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  selectedEmployee: Employee;
  employees = EMPLOYEES;
  constructor() { }
  firstName = "";
  lastName = "";
  empId = 3;

  ngOnInit() {
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
