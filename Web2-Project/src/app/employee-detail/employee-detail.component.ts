import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Employee } from '../employees';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;

  constructor(private route: ActivatedRoute,
    private departmentService: EmployeesService,
    private location: Location) { }

  ngOnInit() {
    this.getEmployee();
  }
  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.departmentService.getEmployee(id)
      .subscribe(department => this.employee = department);
  }
  goBack(): void {
    this.location.back();
  }
}
