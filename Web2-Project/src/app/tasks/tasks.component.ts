import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  selectedTask: Task;
  name="";
  id = 20;
  startdate = new NgbDate(2019,1,12);
  endDate = new NgbDate(2019,12,12);
  constructor(private taskService: TasksService) { }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
}

  ngOnInit() {
    this.getTasks();
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
