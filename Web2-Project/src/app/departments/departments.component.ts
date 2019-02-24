import { Component, OnInit } from '@angular/core';
import {DEPARTMENTS} from '../mock-departments';
import { Department } from '../department';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

 departments=DEPARTMENTS;
 selectedDepartment: Department;
 name="";
 id=90;
  constructor() { }

  ngOnInit() {
  }

  onSelect(department:Department):void{
    this.selectedDepartment=department;
  }
  onClick(name){
    this.departments.push(new Department(this.id=this.id+10,name))
  }
  onRemove(department:Department):void{
    const index = this.departments.indexOf(department);
    this.departments.splice( index,1);
    
  }
}
