import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';
import { Tasks } from './mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(Tasks);
  }
}
