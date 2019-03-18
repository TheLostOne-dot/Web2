import { Component, OnInit } from '@angular/core';

import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(): void {
    this.departmentService.getDepartments()
    .subscribe(departments => this.departments = departments);
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
