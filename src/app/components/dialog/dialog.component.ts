import { Component, OnInit } from '@angular/core';

declare var electron: any;

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public ipcRenderer: any;

  constructor() {
    this.ipcRenderer = electron.ipcRenderer;
  }

  ngOnInit() {
  }

  onClickDialog() {
    this.ipcRenderer.send('popup', ['test']);
  }
}
