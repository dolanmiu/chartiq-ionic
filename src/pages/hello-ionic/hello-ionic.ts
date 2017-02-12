import { Component, AfterViewInit } from '@angular/core';
import { sample5min } from './sample-data';

declare var CIQ: any;
declare var $$$: any;

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage implements AfterViewInit {
  private stxx: any;
  constructor() {
    // Create a STXChart object, the main object for drawing charts. 
  }

  ngAfterViewInit() {
    this.stxx = new CIQ.ChartEngine({ container: $$$(".chartContainer") });
    this.stxx.newChart("SPY", sample5min);
  }
}
