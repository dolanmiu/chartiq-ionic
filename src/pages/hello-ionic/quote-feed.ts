import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { sample5min } from './sample-data';

interface FetchParams {
    extended: boolean;
    feed: string;
    interval: string;
    originalState: Object;
    period: number;
    refreshInterval: number;
    startDate: Date;
    endDate: Date;
    stx: any;
    symbol: string;
    symbolObject: Object;
    ticks: number;
}

export class HistoricalQuoteFeed {

    constructor(private siliconId: number, public candleWidth: number) {
    }

    public fetch(params: FetchParams, cb: Function): void {
        let url: string;

        if (params.startDate && params.endDate) {
            // date range
            console.log(params);
        } else if (params.startDate) {
            // new update
            console.log(params);
        } else if (params.endDate) {
            // pagination
            console.log(params);
        } else {
            // initial load
            console.log('fetching');
            console.log('START DATE');
            console.log(params.startDate);
            console.log(params);
            // set timeout to mimix server
            setTimeout(() => {
                cb({ quotes: sample5min, moreAvailable: true });
            }, 1000);
        }
    }

    public subscribe(): void {
        // TODO
    }

    public update(): void {
        // TODO
    }

    public unsubscribe(): void {
        // TODO
    }
}
