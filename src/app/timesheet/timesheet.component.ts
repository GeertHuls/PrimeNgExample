import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  userTimeData = [
    { day: 'Monday', project: 'Payroll App', startTime: '10:00', endTime: '17:00', category: 'Frontend'},
    { day: 'Tuesday', project: 'Agile Times', startTime: '9:00', endTime: '17:00', category: 'Backend'},
    { day: 'Wednesday', project: 'Mobile App', startTime: '11:00', endTime: '17:00', category: 'Operations'},
    { day: 'Thursday', project: 'Agile Times', startTime: '8:00', endTime: '17:00', category: 'Planning'},
    { day: 'Friday', project: 'Agile Times', startTime: '8:00', endTime: '17:00', category: 'Requirements'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
