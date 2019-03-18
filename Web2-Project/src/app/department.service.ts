import { Injectable } from '@angular/core';
import {Department} from './department';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './messeage.service';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
private departmentsUrl='api/departments';
  constructor(private http: HttpClient,
    private messageService: MessageService) { }
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentsUrl)
    .pipe(
      catchError(this.handleError<Department[]>('getDepartments', []))
    );
  }
  getDepartment(id: number): Observable<Department>{
    const url = `${this.departmentsUrl}/${id}`;
    return this.http.get<Department>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Department>(`getDepartment id=${id}`))
    );
  }
/** DELETE: delete the department from the server */
deleteDepartment (department: Department | number): Observable<Department> {
  const id = typeof department === 'number' ? department : department.id;
  const url = `${this.departmentsUrl}/${id}`;

  return this.http.delete<Department>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted department id=${id}`)),
    catchError(this.handleError<Department>('deleteDepartment'))
  );
}
  /** PUT: update the department on the server */
updateDepartment (department: Department): Observable<any> {
  return this.http.put(this.departmentsUrl, department, httpOptions).pipe(
    tap(_ => this.log(`updated department id=${department.id}`)),
    catchError(this.handleError<any>('updateDepartment'))
  );
}
/** POST: add a new department to the server */
addDepartment (department: Department): Observable<Department> {
  return this.http.post<Department>(this.departmentsUrl, department, httpOptions).pipe(
    tap((newDepartment: Department) => this.log(`added department w/ id=${newDepartment.id}`)),
    catchError(this.handleError<Department>('addDepartment'))
  );
}
/* GET departments whose name contains search term */
searchDepartments(term: string): Observable<Department[]> {
  if (!term.trim()) {
    // if not search term, return empty department array.
    return of([]);
  }
  return this.http.get<Department[]>(`${this.departmentsUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found departments matching "${term}"`)),
    catchError(this.handleError<Department[]>('searchDepartments', []))
  );
}
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

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

  /** Log a DepartmentService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`DepartmentService: ${message}`);
  }
  
}
