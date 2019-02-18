import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks/task';
import { Tasks } from '../tasks/tasks-list';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = Tasks;

  constructor() { }

  ngOnInit() {
  }

}
