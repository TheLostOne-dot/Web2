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
  selectedTask:Task;
  name="";
  id=15;

  constructor() { }

  ngOnInit() {
  }

  onSelect(task:Task):void{
    this.selectedTask=task;
  }
  onClick(name){
    this.tasks.push(new Task(this.id=this.id+1,name))
  }
  onRemove(task:Task):void{
    const index = this.tasks.indexOf(task);
    this.tasks.splice( index,1);
    
  }


}
