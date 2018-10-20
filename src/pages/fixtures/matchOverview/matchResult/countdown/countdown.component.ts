import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs";

@Component({
  selector: 'countdown',
  templateUrl: 'countdown.component.html'
})
export class CountdownComponent implements OnInit {

  @Input("date") dateInMillis: number;

  matchDateIsInFuture: boolean = false;

  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor() {

  }

  ngOnInit(): void {
    let matchDateInSeconds = Math.floor(this.dateInMillis / 1000);
    let actualDateInSeconds = Math.floor(Date.now() / 1000);

    if (actualDateInSeconds <= matchDateInSeconds) {
      this.matchDateIsInFuture = true;
      Observable.timer(0, 1000).subscribe(t => {
        let matchDateInSeconds = Math.floor(this.dateInMillis / 1000);
        let actualDateInSeconds = Math.floor(Date.now() / 1000);

        this.calculateCountdown(matchDateInSeconds - actualDateInSeconds);
      });
    }
  }

  calculateCountdown(inputSeconds: number) {
    let numSeconds = parseInt(inputSeconds.toString(), 10);
    this.days = Math.floor(numSeconds / 86400);
    this.hours = Math.floor((numSeconds - (this.days * 86400)) / 3600);
    this.minutes = Math.floor((numSeconds - (this.hours * 3600) - (this.days * 86400)) / 60);
    this.seconds = numSeconds - (this.days * 86400) - (this.hours * 3600) - (this.minutes * 60);
  }

}
