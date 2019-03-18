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
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { DepartmentSearchComponent } from './department-search/department-search.component';
import { MessagesComponent } from './messages/messages.component';
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
    DepartmentSearchComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
