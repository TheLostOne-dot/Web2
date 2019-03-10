import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  
  task: Task;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTask();
  }

  getTask(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.tasksService.getTask(id)
    .subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }

}
