import { app, BrowserWindow, dialog, ipcMain, Tray, Menu } from 'electron';
import * as devtron from 'devtron';
import * as url from 'url';
import * as process from 'process';
import * as path from 'path';

// require('electron-reload')(process.cwd(), {
//   electron: path.join(process.cwd(), 'node_modules', '.bin', 'electron'),
//   hardResetMethod: 'exit'
// });

let mainWindow: Electron.BrowserWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 720,
    width: 1080,
    title: 'musicmate',
    titleBarStyle: 'hidden',
    frame: false
  });

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // mainWindow.loadURL(url.format({
  //   pathname: 'localhost:8000',
  //   protocol: 'http:',
  //   slashes: true
  // }));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  // devtron.install();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if ( process.platform !== 'darwin' ) {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if ( mainWindow === null ) {
    createWindow();
  } else {
    mainWindow.show();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Dialog Sample
ipcMain.on('popup', (event, args) => {
  dialog.showMessageBox({
    type: 'info',
    title: '[info] Modal Test',
    message: 'It works',
    buttons: ['cancel', 'confirm']
  });
});

ipcMain.on('error', (event, args) => {
  dialog.showMessageBox({
    type: 'error',
    title: '[error] Modal Error',
    message: 'It works'
  });
});

// Window Hide
ipcMain.on('hide', (event, args) => {
  mainWindow.hide();
});

// Window Full
ipcMain.on('full', (event, args) => {
  if ( mainWindow.isMaximized() ) {
    mainWindow.unmaximize();
  } else {
    mainWindow.maximize();
  }
});

// Window Quit
ipcMain.on('quit', (event, args) => {
  mainWindow.close();
});
