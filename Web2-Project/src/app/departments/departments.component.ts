import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import {DepartmentService} from '../department.service';
import { Employee } from '../employees';
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
 name="";
 id=90;
  constructor(private departmentService: DepartmentService, private employeesService: EmployeesService) { }
getDepartments():void{
  this.departmentService.getDepartments()
  .subscribe(departments => this.departments=departments);
}
  ngOnInit() {
    this.getDepartments();
  }

  onSelect(department:Department): void{
    this.selectedDepartment=department;
    this.selectedEmployees=[];
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.departmentService.addDepartment({ name } as Department)
      .subscribe(department => {
        this.departments.push(department);
      });
  }

  delete(department: Department): void {
    this.departments = this.departments.filter(h => h !== department);
    this.departmentService.deleteDepartment(department).subscribe();
  }

}
