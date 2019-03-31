import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentoSearchComponent } from './department-search/department-search.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { DashboardSearchComponent } from './dashboard-search/dashboard-search.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    DepartmentsComponent,
    EmployeesComponent,
    DashboardComponent,
    DepartmentDetailComponent,
    EmployeeDetailComponent,
    TaskDetailComponent,
    CalendarComponent,
    DepartmentoSearchComponent,
    TaskSearchComponent,
    EmployeeSearchComponent,
    DashboardSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
