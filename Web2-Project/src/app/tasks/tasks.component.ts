import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Tasks } from '../mock-tasks';

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
