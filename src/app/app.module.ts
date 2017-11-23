import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatCardModule, MatExpansionModule, MatFormFieldModule, MatSelectModule, MatSidenavModule, MatSliderModule,
  MatTabsModule
} from '@angular/material';
import { PanelComponent } from './components/panel/panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    NotificationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSelectModule,
    MatSliderModule,
    MatSidenavModule
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
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
