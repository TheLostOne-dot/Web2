import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, Route } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './messeage.service'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http: HttpClient, private router: Router,private messageService: MessageService) {
  console.log(this.getEmployees());
  }
  private employeesUrl = 'http://i875395.hera.fhict.nl/api/386275/employee';  // URL to web api
  options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://i875395.hera.fhict.nl/api/386275/employee');
  }
  
  getEmployee(id: number): Observable<Employee> {

    return this.http.get<Employee>('http://i875395.hera.fhict.nl/api/386275/employee?id=' + id);
  }

  searchEmployees(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      return of([]);
    }
	let Emps: Employee[]=[];
	let temp: Employee[]=[];
	this.getEmployees().subscribe(x => {
	temp = x;
	  for(let i=0;i<temp.length;i++){

		if(temp[i].first_name.search(term)!=-1){
			Emps.push(temp[i]);
		}
	  }
	});
	return of(Emps);
    //return this.http.get<Employee[]>(${this.employeesUrl}?name=${term}).pipe(tap(_ => this.log(found employees matching "${term}")), catchError(this.handleError<Employee[]>('searchEmployees', [])));
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
    this.messageService.add(`EmployeeService: ${message}`);
  }

  addEmployee(employee: Employee): void {
    this.http.post<Employee>('http://i875395.hera.fhict.nl/api/386275/employee', JSON.stringify(employee), this.options).subscribe();
  }

  updateEmployee(employee: Employee): void {
    this.http.put<Employee>('http://i875395.hera.fhict.nl/api/386275/employee?id=' + employee.id, JSON.stringify(employee), this.options).subscribe();
  }

  deleteEmployee(employee: Employee): void {
    this.http.delete<Employee>('http://i875395.hera.fhict.nl/api/386275/employee?id=' + employee.id).subscribe();
  }
}
