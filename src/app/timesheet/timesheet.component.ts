import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, Message, TreeNode } from 'primeng/primeng';
import { SampleProjectsData } from './sample.projects.data';
import { SamplePeopleData } from './sample.people.data';

declare var moment: any;

declare var google: any;

export enum PageNames {
  TimePage,
  ProjectPage,
  PlacePage,
  PeoplePage
}

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
  PageNames = PageNames;
  dialogPageIndex = PageNames.TimePage;

  dialogPages: MenuItem[] = [
    { label: 'Time' },
    { label: 'Project' },
    { label: 'Place' },
    { label: 'People' }
  ];

  headerConfig = {
    left: 'prev,next today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay'
  };

  events = [
    {
      title: 'Recent Work',
      start: moment().format(), // '2017-06-02 07:00:00'
      end: moment().add(1, 'hour').format()
    }
  ];

  projectsTree: TreeNode[] = SampleProjectsData.projects;
  selectedProject: TreeNode;

  mapOptions = {
    center: { lat: -33.8688, lng: 151.2093 },
    zoom: 5
  };

  mapOverlays = [
    new google.maps.Marker({ position: { lat: -35.3075, lng: 149.124417 }, title: 'Canberra Office' }),
    new google.maps.Marker({ position: { lat: -33.8688, lng: 151.2093 }, title: 'Sydney Office' }),
    new google.maps.Marker({ position: { lat: -37.813611, lng: 144.963056 }, title: 'Melbourne Office' }),
    new google.maps.Marker({ position: { lat: -28.016667, lng: 153.4 }, title: 'Gold Coast Office' })
  ];

  people = SamplePeopleData.people;

  messages: Message[] = [];

  constructor(private confirmationService: ConfirmationService) {
  }

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

  onMarkerClick(markerEvent) {
    const markerTitle = markerEvent.overlay.title;
    const markerPosition = markerEvent.overlay.position;

    alert(`You clicked on ${markerTitle} at ${markerPosition}`);

    markerEvent.map.panTo(markerPosition);
    markerEvent.map.setZoom(12);
  }

  saveNewEntry() {
    this.displayEditDialog = false;
    this.messages.push({ severity: 'success', summary: 'Entry Created', detail: 'Your entry has been created' });
  }

  cancelDialog() {
    this.confirmationService.confirm({
      header: 'Cancel Time Creation',
      message: 'Cancel all changes. Are you sure?',
      accept: () => {
        this.displayEditDialog = false;
      },
      reject: () => {
        console.log('False cancel. Just keep editing.');
      }
    });
  }
}
