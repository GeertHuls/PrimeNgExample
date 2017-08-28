import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuItems: MenuItem[];
  miniMenuItems: MenuItem[];

  ngOnInit(): void {

    const handleSelected = function(event) {
      const allMenus = jQuery(event.originalEvent.target).closest('ul');
      const allLinks = allMenus.find('.menu-selected');

      allLinks.removeClass('menu-selected');
      const selected = jQuery(event.originalEvent.target).closest('a');
      selected.addClass('menu-selected');
    };

    this.menuItems = [
      {label: 'Dashboard', icon: 'fa-home', routerLink: ['/dashboard'], command: (event) => handleSelected(event)},
      {label: 'All Times', icon: 'fa-calendar', routerLink: ['/alltimes'], command: (event) => handleSelected(event)},
      {label: 'My Timesheet', icon: 'fa-clock-o', routerLink: ['/timesheet'], command: (event) => handleSelected(event)},
      {label: 'Add Project', icon: 'fa-tasks', routerLink: ['/projects'], command: (event) => handleSelected(event)},
      {label: 'My Profile', icon: 'fa-users', routerLink: ['/profile'], command: (event) => handleSelected(event)},
      {label: 'Settings', icon: 'fa-sliders', routerLink: ['/settings'], command: (event) => handleSelected(event)},
    ];

    this.miniMenuItems = [];
    this.menuItems.forEach( (item: MenuItem) => {
      const miniItem = { icon: item.icon, routerLink: item.routerLink }
      this.miniMenuItems.push(miniItem);
    });
  }
}
