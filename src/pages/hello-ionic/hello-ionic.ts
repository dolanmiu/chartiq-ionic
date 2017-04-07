import { Component, AfterViewInit } from '@angular/core';
import { sample5min } from './sample-data';
import { HistoricalQuoteFeed } from './quote-feed';

declare var CIQ: any;
declare var $$$: any;

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  private stxx: any;
  constructor() {
    // Create a STXChart object, the main object for drawing charts. 
  }

  loadChart() {
    this.stxx = new CIQ.ChartEngine({
      container: $$$(".chartContainer"),
      layout: {
        chartType: 'candle',
        crosshair: false,
        periodicity: 1,
        timeUnit: 'minute',
        interval: 1,
        candleWidth: 5
      },
      streamParameters: {
        maxWait: 125
      }
    });
    this.stxx.chart.allowScrollPast = false;
    this.stxx.cleanupGaps = "carry";

    const currentQuoteFeed = new HistoricalQuoteFeed(22, 60);
    this.stxx.attachQuoteFeed(currentQuoteFeed);
    this.stxx.newChart('HEL', undefined, null);
  }
}
