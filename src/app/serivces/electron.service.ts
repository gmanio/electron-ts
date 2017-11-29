import { Injectable } from '@angular/core';

declare var window;

@Injectable()
export class ElectronService {
  public isActive: boolean = window.hasOwnProperty('require') ? true : false;
  public ipcRenderer;
  public remote;

  constructor() {
    if ( this.isActive ) {
      const electron = window.require('electron');

      this.ipcRenderer = electron.ipcRenderer;
      this.remote = electron.remote;
    }
  }

  public fullScreen() {
    if ( this.isActive ) {
      const window = this.remote.getCurrentWindow();
      if ( window.isMaximized() ) {
        window.unmaximize();
      } else {
        window.maximize();
      }
    }
  }

  public hide() {
    if ( this.isActive ) {
      const window = this.remote.getCurrentWindow();
      window.minimize();
    }
  }

  public quit() {
    if ( this.isActive ) {
      const window = this.remote.getCurrentWindow();
      window.close();
    }
  }

  public send(command: string, ...args) {
    if ( this.isActive ) {
      this.ipcRenderer.send(command, args)
    }
  }
}
