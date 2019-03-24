import { Component, OnInit } from '@angular/core';
import {Department} from '../department';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
department: Department;
  constructor(
    private route: ActivatedRoute,
  private departmentService: DepartmentService,
  private location: Location
  ) { }

  ngOnInit() {
    this.getDepartment();
  }
  getDepartment(): void{
    const id = +this.route.snapshot.paramMap.get('id');
  this.departmentService.getDepartment(id)
    .subscribe(department => this.department = department);
  }
  goBack(): void {
    this.location.back();
  }
}
