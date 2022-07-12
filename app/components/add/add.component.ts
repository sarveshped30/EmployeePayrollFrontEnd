import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  employeeForm !: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private service:EmployeeService,public dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee,private router: Router) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      employeeName : ['',Validators.required],
      image : ['',Validators.required],
      gender : ['',Validators.required],
      department : ['',Validators.required],
      salary : ['',Validators.required],
      date : ['',Validators.required],
      note : ['',Validators.required],
    })
    
    if(this.data != null) {
      this.employeeForm.controls['employeeName'].setValue(this.data.employeeName);
      this.employeeForm.controls['image'].setValue(this.data.image);
      this.employeeForm.controls['gender'].setValue(this.data.gender);
      this.employeeForm.controls['department'].setValue(this.data.department);
      this.employeeForm.controls['salary'].setValue(this.data.salary);
      this.employeeForm.controls['date'].setValue(this.data.date);
      this.employeeForm.controls['note'].setValue(this.data.note);
    }
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  insert() : void {
    if(this.data.employeeId == undefined) {
        if(this.employeeForm.valid) {
          this.service.addEmployee(this.employeeForm.value).subscribe(response => {
            console.log(response);
            console.log(this.employeeForm.value);
          })
          alert(this.employeeForm.value.employeeName + " added successfuly");
        } else {
          alert("Invalid userDetails/form incomplete");
      }
    } else {
      this.updateEmployee();
      
    }
    
  }

  updateEmployee() {
    this.service.updateEmployee(this.employeeForm.value, this.data.employeeId).subscribe(response => {
      console.log(response);
      console.log(this.employeeForm.value);
      this.dialogRef.close('update');
    })
  }
}
