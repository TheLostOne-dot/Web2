import { Injectable } from '@angular/core';
import { Department } from './department';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, Route } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './messeage.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departmentsUrl = 'http://i875395.hera.fhict.nl/api/386275/department';  // URL to web api
  options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>('http://i875395.hera.fhict.nl/api/386275/department');
  }

  getDepartment(id: number): Observable<Department>{
   
    return this.http.get<Department>('http://i875395.hera.fhict.nl/api/386275/department?id=' + id);
  }


  searchDepartments(term: string): Observable<Department[]> {
    if (!term.trim()) {
      // if not search term, return empty array.
      return of([]);
    }
    return this.http.get<Department[]>(`${this.departmentsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found departmetns matching "${term}"`)),
      catchError(this.handleError<Department[]>('searchDepartments', []))
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
  }

  addDepartment(department: Department): void {
    this.http.post<Department>('http://i875395.hera.fhict.nl/api/386275/department', JSON.stringify(department), this.options).subscribe();
  }

  updateDepartment(department: Department): void {
    this.http.put<Department>('http://i875395.hera.fhict.nl/api/386275/department?id=' + department.id, JSON.stringify(department), this.options).subscribe();
  }

  deleteDepartment(department: Department): void {
    this.http.delete<Department>('http://i875395.hera.fhict.nl/api/386275/department?id=' + department.id).subscribe();
  }
}
