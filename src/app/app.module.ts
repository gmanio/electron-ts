import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PanelComponent } from './components/panel/panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationComponent } from './components/notification/notification.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { AppComponent } from './app.component';
import { PeriodictableComponent } from './components/periodictable/periodictable.component';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatSelectModule, MatSidenavModule, MatSliderModule,
  MatStepperModule,
  MatTabsModule
} from '@angular/material';
import { StepperComponent } from './components/stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { YoutubeComponent } from './components/youtube/youtube.component';

@NgModule(<NgModule>{
  declarations: [
    AppComponent,
    PanelComponent,
    NotificationComponent,
    DialogComponent,
    PeriodictableComponent,
    StepperComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSelectModule,
    MatSliderModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule
  ],
  exports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSelectModule,
    MatSliderModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
