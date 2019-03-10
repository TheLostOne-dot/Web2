export class Task{
    id: number;
    department_id: number;
    name: string;
    employees: number[];
    due_date: string;
    constructor(id: number, name: string){
        this.id=id;
        this.name=name;
    }
}