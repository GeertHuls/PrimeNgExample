import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { AlltimesComponent } from './alltimes/alltimes.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProfileComponent } from './profile/profile.component';

export const routes = [
  {  path: '', component: DashboardComponent},
  {  path: 'dashboard', component: DashboardComponent},
  {  path: 'projects', component: ProjectsComponent},
  {  path: 'alltimes', component: AlltimesComponent},
  {  path: 'timesheet', component: TimesheetComponent},
  {  path: 'settings', component: SettingsComponent },
  {  path: 'profile', component: ProfileComponent },
  {  path: '**', component: SettingsComponent }
];

export const routing = RouterModule.forRoot(routes);
