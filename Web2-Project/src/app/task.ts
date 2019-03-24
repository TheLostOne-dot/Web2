import { NgbDate} from '@ng-bootstrap/ng-bootstrap';
export class Task{
  id: number;
  name: string;
  startdate: NgbDate;
  endDate: NgbDate;
  constructor(id: number, name: string, startdate: NgbDate, endDate: NgbDate
  ) {
    this.id = id;
    this.name = name;
    this.startdate = startdate;
    this.endDate = endDate;
    }
}
