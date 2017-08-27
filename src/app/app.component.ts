import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuItems: MenuItem[];
  miniMenuItems: MenuItem[];

  ngOnInit(): void {
    this.menuItems = [
      {label: 'Dashboard', icon: 'fa-home', routerLink: ['/dashboard']},
      {label: 'All Times', icon: 'fa-calendar', routerLink: ['/alltimes']},
      {label: 'My Timesheet', icon: 'fa-clock-o', routerLink: ['/timesheet']},
      {label: 'Add Project', icon: 'fa-tasks', routerLink: ['/projects']},
      {label: 'My Profile', icon: 'fa-users', routerLink: ['/profile']},
      {label: 'Settings', icon: 'fa-sliders', routerLink: ['/settings']},
    ];

    this.miniMenuItems = [];
    this.menuItems.forEach( (item: MenuItem) => {
      const miniItem = { icon: item.icon, routerLink: item.routerLink }
      this.miniMenuItems.push(miniItem);
    });
  }
}
