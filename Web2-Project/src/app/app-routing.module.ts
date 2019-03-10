import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentDetailComponent} from './department-detail/department-detail.component'
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'employees', component: EmployeesComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: DepartmentDetailComponent },
  { path: 'employee/:id', component: EmployeeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
