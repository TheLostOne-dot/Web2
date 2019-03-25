import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../task';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { TasksService } from '../tasks.service';
  @Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  hoveredDate: NgbDate;
  fromDate: NgbDate;
    toDate: NgbDate;
    tasks: Task[] = [];
    selectTask: Task;

    constructor(calendar: NgbCalendar,private tasksService: TasksService) {
      this.fromDate = calendar.getToday();
    }
    onSelectedTask(selectTask: Task): void {
      this.selectTask = selectTask;
      this.toDate = selectTask.due_date;
    }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

    ngOnInit() {
      this.getTasks();
  }
    getTasks(): void {
      this.tasksService.getTasks()
        .subscribe(tasks => this.tasks = tasks);
    }
}
