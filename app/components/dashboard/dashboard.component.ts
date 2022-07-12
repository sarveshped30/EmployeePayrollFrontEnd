import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees !: Employee[]

  constructor(private service:EmployeeService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(response => {
      this.employees = response.data;
      console.log(this.employees);
      
    })
  }

  deleteEmployee(employeeId: number) {
    this.service.deleteEmployee(employeeId).subscribe(response => {
      console.log(response)
      this.ngOnInit();
    })
  }

  editEmployee(employee : any) {
      const dialogRef = this.dialog.open(AddComponent, {
      width:'60%',
      height: '70%',
      data:employee,
    }).afterClosed().subscribe(val => {
      if(val == 'update') {
        this.ngOnInit();
      }
    })
}

}
