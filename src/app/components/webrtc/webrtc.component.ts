import {
  AfterViewInit, Component, OnInit, ViewChild, Input, AfterViewChecked
} from '@angular/core';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Observable } from 'rxjs/Observable';

declare var window;

@Component({
  selector: 'app-webrtc',
  templateUrl: './webrtc.component.html',
  styleUrls: ['./webrtc.component.scss']
})
export class WebrtcComponent implements OnInit, AfterViewInit, AfterViewChecked {
  stream$: Observable<any>;
  // @ViewChild('myCanvas') canvas;
  @Input('myCanvas') canvas;
  @ViewChild('camera') video;

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.stream$ = fromPromise(navigator.mediaDevices.getUserMedia({ video: true, audio: false }));
    this.canvas.width = 100;
    this.canvas.height = 100;
    // debugger;


  }

  ngAfterViewChecked(): void {
    if(this.canvas.getContext){
      this.canvas.getContext('2d').drawImage(this.video.nativeElement, 0, 0, this.canvas.width , this.canvas.height);
    }
  }

  //   this.elVideo = this.el.nativeElement.querySelector('video');
  //   this.elCanvas = this.el.nativeElement.querySelector('canvas');
  //   this.elCanvas.width = 1000;
  //   this.elCanvas.height = 1000;
  //   this.elCanvas.getContext('2d').drawImage(this.elVideo, 0, 0, this.elCanvas.width, this.elCanvas.height);
  //
  //   window.stream = fromPromise(navigator.mediaDevices.getUserMedia({ video: true, audio: false }));
  //   this.stream$ = fromPromise(navigator.mediaDevices.getUserMedia({ video: true, audio: false }));
  //   this.cd.detectChanges();
  // }


}
