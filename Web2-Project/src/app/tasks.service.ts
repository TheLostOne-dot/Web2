import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient, private roouter: Router) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://i875395.hera.fhict.nl/api/386275/task');
  }

  getTask(id: number): Observable<Task>{
    return this.http.get<Task>('http://i875395.hera.fhict.nl/api/386275/task?id=' + id);
  }
}
