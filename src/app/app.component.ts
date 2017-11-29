import { Component } from '@angular/core';
import { ElectronService } from './serivces/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private electron: ElectronService) {
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
}
