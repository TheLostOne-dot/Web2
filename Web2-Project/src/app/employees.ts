export class Employee {
    empId: number;
    firstName: string;
  lastName: string;
  //department_name: string;
  constructor(empId: number, firstName: string, lastName:string) {
    this.empId = empId;
    this.firstName = firstName;
    this.lastName = lastName;
  }

}
