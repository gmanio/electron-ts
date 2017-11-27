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
    // this.ipcRenderer = electron.ipcRenderer;
  }

  ngOnInit() {
  }

  onClickDialog() {
    // this.ipcRenderer.send('popup', ['test']);
  }


  openDialog(): void {
    // let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //   width: '250px',
    //   data: { name: this.name, animal: this.animal }
    // });
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}
