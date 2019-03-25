import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentService } from '../department.service';
import { Department } from '../department';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  departments: Department[];
  selectedTask: Task;
  name="";
  id = 20;
  startdate = new NgbDate(2019,1,12);
  endDate = new NgbDate(2019, 12, 12);
  constructor(private taskService: TasksService, private departmentService: DepartmentService) { }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }
  getDepartments(): void {
    this.departmentService.getDepartments()
      .subscribe(departments => this.departments = departments);
  }
  ngOnInit() {
    this.getTasks();
    this.getDepartments();
  }

  onSelect(task: Task): void {
    this.selectedTask=task;
  }
  //onClick(name){
  //  this.tasks.push(new Task(this.id=this.id+1,name,this.startdate,this.endDate))
  //}
  onRemove(task:Task):void{
    const index = this.tasks.indexOf(task);
    this.tasks.splice( index,1);
    
  }


}
