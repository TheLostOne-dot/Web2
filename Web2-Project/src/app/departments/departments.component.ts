import { Component, OnInit } from '@angular/core';
import {DEPARTMENTS} from '../mock-departments';
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
 employees: Employee[];
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
    this.employeesService.getEmployees()
      .subscribe (employee => 
        {
          for(let i=0; i<department.employees.length; i++)
          {
            for(let j=0; j<employee.length; j++)
              {
                if(department.employees[i]==employee[j].empId)
                {
                      this.emps.push(empl[j]);
                }
              }
          }
        }
      )
  }
  onClick(name){
    this.departments.push(new Department(this.id=this.id+10,name))
  }
  onRemove(department:Department):void{
    const index = this.departments.indexOf(department);
    this.departments.splice( index,1);
    
  }
}
