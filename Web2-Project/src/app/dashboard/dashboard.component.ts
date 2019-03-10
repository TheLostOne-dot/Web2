import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees';
import { EmployeesService } from '../employees.service';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees: Employee[] = [];
  departments: Department[] = [];
  tasks: Task[] = [];
  constructor(private employeeService: EmployeesService, private departmentService: DepartmentService, private tasksService: TasksService) { }

  ngOnInit() {
    this.getEmployees();
    this.getDepartments();
    this.getTasks();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }
  getDepartments(): void{
    this.departmentService.getDepartments()
    .subscribe(departments => this.departments = departments);
  }
  getTasks(): void {
    this.tasksService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }
}
