import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeObj: EmployeeObj;
  constructor() {
    this.employeeObj = new EmployeeObj();
  }

  ngOnInit(): void {}
}
export class EmployeeObj {
  firstname: string;
  lastname: string;
  technology: string;
  designation: string;
  skill: string;
  core: string;
  IsCertification: boolean;
  company: string;
  fewDetails: string;
  constructor() {
    this.firstname = '';
    this.lastname = '';
    this.technology = '';
    this.designation = '';
    this.skill = '';
    this.core = '';
    this.IsCertification = false;
    this.company = '';
    this.fewDetails = '';
  }
}
