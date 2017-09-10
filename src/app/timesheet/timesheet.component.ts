import { Component, OnInit } from '@angular/core';
declare var moment: any;

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

  daysOfWeek = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ];

  day = 'Monday';
  dateAndMonth = moment().day(this.day).format('MMMM Do, YYYY');

  displayEditDialog = false;

  constructor() { }

  ngOnInit() {
  }

  getTimesForDay(tabName: string) {
    return this.userTimeData.filter((row) => {
      return row.day === tabName;
    });
  }

  onChangeTabs(event) {
    const index = event.index;
    this.day = this.daysOfWeek[index];
    this.dateAndMonth = moment().day(this.day).format('MMMM Do, YYYY');
  }

  saveNewEntry() {
  }

  cancelDialog() {
    this.displayEditDialog = false;
  }
}
