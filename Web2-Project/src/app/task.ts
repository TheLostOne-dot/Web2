import { NgbDate} from '@ng-bootstrap/ng-bootstrap';
import { Employee } from './employee';

export class Task{
  id: number;
  department_id: number;
  name: string;
  employees: Employee[];
  due_date: NgbDate;
  constructor() {
    }
}
