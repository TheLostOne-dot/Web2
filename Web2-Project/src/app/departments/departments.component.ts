import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  selectedEmployees: Employee[];
  departments: Department[];
  selectedDepartment: Department;
  department: Department = new Department();
  message: string;

  constructor(private departmentService: DepartmentService, private employeesService: EmployeesService) { }

  getDepartments(): void{
    this.departmentService.getDepartments()
      .subscribe(departments => this.departments = departments);
  }
  ngOnInit() {
    this.getDepartments();
  }

  onSelect(department:Department): void{
    this.selectedDepartment=department;
  }
  onClick() {
    this.departmentService.addDepartment(this.department);
    this.department = new Department();
    this.message = "Succesfuly created";
    this.refresh();
  }
  onRemove(department: Department): void{
    this.departmentService.deleteDepartment(department);
    const index = this.departments.indexOf(department);
    this.departments.splice( index,1);
    
  }

  refresh(): void {
    window.location.reload();
  }
}
