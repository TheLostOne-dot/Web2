import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Department } from './department';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const departments = [
      { id: 11, name: 'Administration' },
      { id: 12, name: 'Marketing' },
      { id: 13, name: 'Purchesing' },
      { id: 14, name: 'Human Resources' },
      { id: 15, name: 'Shipping' },
      { id: 16, name: 'IT' },
      { id: 17, name: 'Public Relations' },
      { id: 18, name: 'Finance' },
      { id: 19, name: 'Accounting' },
      { id: 20, name: 'Relations' }
    ];
    return {departments};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(departments: Department[]): number {
    return departments.length > 0 ? Math.max(...departments.map(department => department.id)) + 1 : 11;
  }
}