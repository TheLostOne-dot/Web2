import { Task } from './task';
import { NgbDate} from '@ng-bootstrap/ng-bootstrap';

export const Tasks: Task[] = [
  { id: 11, name: 'Monthly report', startdate: new NgbDate(2019, 2, 18), endDate: new NgbDate(2019, 3, 25) },
  { id: 12, name: 'Stock refill', startdate: new NgbDate(2019, 2, 25), endDate: new NgbDate(2019, 3, 26) },
  { id: 13, name: 'Check inventory', startdate: new NgbDate(2019, 2, 18), endDate: new NgbDate(2019, 4, 28) },
  { id: 14, name: 'Pretend working', startdate: new NgbDate(2019, 2, 18), endDate: new NgbDate(2019, 2, 18) },
  { id: 15, name: 'Ship product', startdate: new NgbDate(2019, 2, 18), endDate: new NgbDate(2019, 2, 18) },
  { id: 16, name: 'Database maintanence', startdate: new NgbDate(2019, 2, 18), endDate: new NgbDate(2019, 2, 18) },
  { id: 17, name: 'Fix printer', startdate: new NgbDate(2019, 2, 18), endDate: new NgbDate(2019, 2, 18) },
  { id: 18, name: 'Market evaluation', startdate: new NgbDate(2019, 2, 18), endDate: new NgbDate(2019, 2, 18) },
  { id: 19, name: 'Strategising', startdate: new NgbDate(2019, 2, 18), endDate: new NgbDate(2019, 2, 18) },
  { id: 20, name: 'Employee managing', startdate: new NgbDate(2019, 2, 18), endDate: new NgbDate(2019, 2, 18)}
]
