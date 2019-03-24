import { Employee } from './employees';

export class Department{
    id: number;
  name: string;
  //employees: Employee[];
    constructor(id: number, name: string){
        this.id=id;
        this.name=name;
    }
}
