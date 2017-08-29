import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes = [
  {  path: '', component: DashboardComponent},
  {  path: 'dashboard', component: DashboardComponent},
  {  path: 'settings', component: SettingsComponent },
  {  path: '**', component: SettingsComponent }
];

export const routing = RouterModule.forRoot(routes);
