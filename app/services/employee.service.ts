import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   private employee:Employee[] = [];

  constructor() { }

  addEmployee(employee:any) {
    this.employee.unshift(employee);
    console.log(this.employee)
  }

  getEmployees() {
    return this.employee;
  }

}
