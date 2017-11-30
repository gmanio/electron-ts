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
    this.canvas.width = 500;
    this.canvas.height = 500;
  }

  ngAfterViewChecked(): void {
    if(this.canvas.getContext){
      this.canvas.getContext('2d').drawImage(this.video.nativeElement, 0, 0, this.canvas.width , this.canvas.height);
    }
  }

}
