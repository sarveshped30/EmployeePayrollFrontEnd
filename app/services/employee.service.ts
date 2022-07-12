import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   private baseUrl:string = "http://localhost:8080/employeepayrollservice"

  constructor(private http:HttpClient ) { }

  addEmployee(employee:any): Observable<any> {
    return this.http.post(this.baseUrl + "/create", employee);
  }

  getEmployees(): Observable<any> {
    return this.http.get(this.baseUrl + "/get");
  }

  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete(this.baseUrl + "/delete/" + employeeId);
  }

  updateEmployee(employee : any, employeeId: number) : Observable<any> {
    return this.http.put(this.baseUrl + "/update/" + employeeId, employee);
  }

  }
