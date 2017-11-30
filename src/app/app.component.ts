import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ElectronService } from './serivces/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges{
  title = 'app';
  @ViewChild('myCanvas') canvas;
  brightnessSlider: 0;
  contrastSlider = 0;
  max = 200;
  min = 0;

  constructor(private electron: ElectronService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }

  onClickQuit() {
    this.electron.quit();
  }

  onClickHide() {
    this.electron.hide();
  }

  onClickFull() {
    this.electron.fullScreen();
  }

  activeBlur(activated: Boolean) {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if ( activated ) {
      ctx.filter = 'blur(5px)';
    } else {
      ctx.filter = 'blur(0px)';
    }
  }

  onChangeContrast(event: Event) {
    const ctx = this.canvas.nativeElement.getContext('2d');
    ctx.filter = `contrast(${event}%)`;
  }

  onChangeBrightness(event: Event) {
    const ctx = this.canvas.nativeElement.getContext('2d');
    ctx.filter = `brightness(${event}%)`;
  }

  activeHue(activated: Boolean) {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if ( activated ) {
      ctx.filter = 'hue-rotate(90deg)';
    } else {
      ctx.filter = 'hue-rotate(0deg)';
    }
  }

  activeDropShadow(activated: Boolean) {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if ( activated ) {
      ctx.filter = 'drop-shadow(16px 16px 20px red) invert(75%)';
    } else {
      ctx.filter = 'blur(0px)';
    }
  }
}
