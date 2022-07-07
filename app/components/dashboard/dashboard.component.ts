import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees:Employee[] = []

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
    this.employees =  this.service.getEmployees();
  }

}
