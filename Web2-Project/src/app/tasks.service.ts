import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, Route } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './messeage.service'
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient, private router: Router,private messageService: MessageService) { }
  private tasksUrl = 'http://i875395.hera.fhict.nl/api/386275/task';  // URL to web api


  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://i875395.hera.fhict.nl/api/386275/task');
  }

  getTask(id: number): Observable<Task>{
    return this.http.get<Task>('http://i875395.hera.fhict.nl/api/386275/task?id=' + id);
  }

  searchTasks(term: string): Observable<Task[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Task[]>(`${this.tasksUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found departmetns matching "${term}"`)),
      catchError(this.handleError<Task[]>('searchTasks', []))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);

  addTask(task: Task): void {
    this.http.post<Task>('http://i875395.hera.fhict.nl/api/386275/task', JSON.stringify(task)).subscribe();
  }

  deleteTask(task: Task): void {
    this.http.delete<Task>('http://i875395.hera.fhict.nl/api/386275/task?id=' + task.id).
      subscribe(any => this.router.navigateByUrl('/task'));
  }

  updateTask(task: Task): void {
    this.http.put<Task>('http://i875395.hera.fhict.nl/api/386275/task', JSON.stringify(task)).subscribe();

  }
}
