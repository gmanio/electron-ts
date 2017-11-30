import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatStepperModule,
  MatTabsModule,
  MatInputModule,
} from '@angular/material';
import { PeriodictableComponent } from './components/periodictable/periodictable.component';
import { NotificationComponent } from './components/notification/notification.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { WebrtcComponent } from './components/webrtc/webrtc.component';
import { PanelComponent } from './components/panel/panel.component';
import { AppComponent } from './app.component';
import { ElectronService } from './serivces/electron.service';

@NgModule(<NgModule>{
  declarations: [
    AppComponent,
    PanelComponent,
    NotificationComponent,
    DialogComponent,
    PeriodictableComponent,
    StepperComponent,
    YoutubeComponent,
    WebrtcComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSelectModule,
    MatSliderModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSelectModule,
    MatSliderModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
