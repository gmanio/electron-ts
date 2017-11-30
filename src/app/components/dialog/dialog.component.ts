import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../serivces/electron.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  constructor(private electron: ElectronService) {
  }

  ngOnInit() {
  }

  onClickDialog() {
    this.electron.send('popup', ['test']);
  }

  onClickErrorDialog() {
    this.electron.send('error');
  }
}
