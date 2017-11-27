import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
MatButtonModule,
MatCardModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatSelectModule, MatSidenavModule, MatSliderModule,
MatStepperModule,
MatTabsModule
} from '@angular/material';
import { PeriodictableComponent } from './components/periodictable/periodictable.component';
import { NotificationComponent } from './components/notification/notification.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { WebrtcComponent } from './components/webrtc/webrtc.component';
import { PanelComponent } from './components/panel/panel.component';
import { AppComponent } from './app.component';

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
