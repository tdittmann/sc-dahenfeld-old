import {Component, Input} from "@angular/core";

@Component({
  selector: 'match-result',
  templateUrl: 'matchResult.component.html'
})
export class MatchResultComponent {

  @Input("isNextMatch") isNextMatch: boolean = false;
  @Input("homeResult") homeResult: number;
  @Input("awayResult") awayResult: number;
  @Input("matchDate") matchDate: number;

  constructor() {

  }

}
