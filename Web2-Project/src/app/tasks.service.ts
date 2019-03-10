import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';
import { Tasks } from './mock-tasks';
import { MAX_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(Tasks);
  }
}
