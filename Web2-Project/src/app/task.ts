import { NgbDate} from '@ng-bootstrap/ng-bootstrap';
import { Employee } from './employees';
export class Task{
  id: number;
  department_id: number;
  name: string;
  employees: Employee[];
  due_date: NgbDate;
  constructor(name: string, department_id: number) {
    this.name = name;
    this.department_id = department_id;
    }
}
