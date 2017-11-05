import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'player-statistic',
  templateUrl: 'playerStatistic.component.html'
})
export class PlayerStatisticComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.seasonValue);
    console.log(this.careerValue);
  }

  @Input() text: string;
  @Input() seasonValue: number;
  @Input() careerValue: number;

  constructor() {

  }

}
