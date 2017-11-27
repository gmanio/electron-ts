import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

declare const THREE;

@Component({
  selector: 'app-periodictable',
  templateUrl: './periodictable.component.html',
  styleUrls: ['./periodictable.component.scss']
})
export class PeriodictableComponent implements OnInit, AfterViewInit {
  public camera;
  public scene;
  public renderer;
  public controls;
  public objects = [];
  public targets = { table: [], sphere: [], helix: [], grid: [] };


  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  public init() {
  }
}



