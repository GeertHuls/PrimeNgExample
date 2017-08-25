import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const routes = [
  {  path: '', component: SettingsComponent }
];

export const routing = RouterModule.forRoot(routes);
