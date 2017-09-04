import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alltimes',
  templateUrl: './alltimes.component.html',
  styleUrls: ['./alltimes.component.css']
})
export class AlltimesComponent implements OnInit {

  allTimesheetData = [
    { user: 'Glen', project: 'Payroll App', category: 'Backend', startTime: 1000, endTime: 1700, date: 1434243 },
    { user: 'Karen', project: 'Agile Times', category: 'Frontend', startTime: 900, endTime: 1700, date: 1434243 },
    { user: 'Si', project: 'Mobile App', category: 'Operations', startTime: 1100, endTime: 1700, date: 1434243 },
    { user: 'Rohit', project: 'Agile Times', category: 'Backend', startTime: 800, endTime: 1700, date: 1434243 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
