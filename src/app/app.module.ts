import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { MenuModule, PanelModule, ChartModule } from 'primeng/primeng';
import { routing } from './routing';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatisticComponent } from './statistic/statistic.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    StatisticComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    PanelModule,
    ChartModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
