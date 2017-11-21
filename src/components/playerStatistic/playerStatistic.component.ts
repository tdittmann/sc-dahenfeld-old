import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'player-statistic',
  templateUrl: 'playerStatistic.component.html'
})
export class PlayerStatisticComponent {

  @Input() text: string;
  @Input() seasonValue: number;
  @Input() careerValue: number;

  constructor() {

  }

}
