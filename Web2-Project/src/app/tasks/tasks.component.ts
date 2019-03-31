import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  departments: Department[];
  selectedTask: Task;
  task: Task = new Task();
  message: string;
  departments$: Observable<Department[]>;

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
    this.departments$ = this.departmentService.getDepartments();
  }

  onSelect(task: Task): void {
    this.selectedTask=task;
  }
  addTask(): void{
    this.taskService.addTask(this.task);
    this.task = new Task();
    this.message = "Succesfuly created";
    this.refresh();
  }

  onRemove(task: Task): void {
    this.taskService.deleteTask(task);
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);

  }

  refresh(): void {
    window.location.reload();
  }


}
