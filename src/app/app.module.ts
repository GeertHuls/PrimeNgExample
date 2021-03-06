import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import {
  MenuModule, PanelModule, ChartModule, InputTextModule, ButtonModule, InputMaskModule,
  InputTextareaModule, EditorModule, CalendarModule, RadioButtonModule, FieldsetModule, Dropdown, DropdownModule,
  MultiSelectModule, ListboxModule, SpinnerModule, SliderModule, RatingModule, DataTableModule, ContextMenuModule,
  TabViewModule, DialogModule, StepsModule, ScheduleModule, TreeModule, GMapModule, DataGridModule, TooltipModule,
  ConfirmDialogModule, ConfirmationService, GrowlModule, DragDropModule, Galleria, GalleriaModule
} from 'primeng/primeng';
import { routing } from './routing';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatisticComponent } from './statistic/statistic.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { FielderrorsComponent } from './fielderrors/fielderrors.component';
import { AlltimesComponent } from './alltimes/alltimes.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    StatisticComponent,
    DashboardComponent,
    ProjectsComponent,
    FielderrorsComponent,
    AlltimesComponent,
    TimesheetComponent,
    ProfileComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MenuModule,
    PanelModule,
    ChartModule,
    routing,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    DataTableModule,
    ContextMenuModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    ScheduleModule,
    TreeModule,
    GMapModule,
    DataGridModule,
    TooltipModule,
    ConfirmDialogModule,
    GrowlModule,
    DragDropModule,
    GalleriaModule
  ],
  providers: [ ConfirmationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
