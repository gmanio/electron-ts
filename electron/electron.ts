import { app, BrowserWindow, dialog, ipcMain, Tray } from 'electron';
import * as path from 'path';
import * as url from 'url';
import * as process from 'process';

const env = process.env.NODE_ENV;

let mainWindow: Electron.BrowserWindow;

if ( env !== 'production' ) {
  require('electron-reload')(process.cwd(), {
    electron: path.join(process.cwd(), 'node_modules', '.bin', 'electron'),
    hardResetMethod: 'exit'
  });
}


function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 600,
    width: 1000,
    webPreferences: {
      nodeIntegrationInWorker: true
    },
    titleBarStyle: 'hiddenInset'
  });

  // and load the index.html of the app.
  // mainWindow.loadURL(url.format({
  //   pathname: path.join(__dirname, '../index.html'),
  //   protocol: 'file:',
  //   slashes: true,
  // }));

  mainWindow.loadURL(url.format({
    pathname: '10.211.249.215:8000',
    protocol: 'http:',
    slashes: true,
  }));


  // Open the DevTools.
  mainWindow.webContents.openDevTools();


  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}


// app.getFileIcon(process.cwd() + '/electron/icon/ico.png');
// app.dock.setIcon(process.cwd() + '/electron/icon/ico.png');
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
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg);  // prints "ping"
  event.sender.send('asynchronous-reply', 'pong');
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg); // prints "ping"
  event.returnValue = 'pong';
});

ipcMain.on('popup', (event, args) => {
  dialog.showMessageBox({
    type: 'info',
    title: 'Modal Test',
    message: 'It works',
    buttons: ['cancel', 'confirm']
  });
});
