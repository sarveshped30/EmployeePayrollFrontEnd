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

  deleteEmployee(empName: string) {
    this.employee.forEach(emp => {
      if(emp.name == empName) {
          let index = this.employee.indexOf(emp);
          this.employee.splice(index,1);
      }
    });
  }


  }
