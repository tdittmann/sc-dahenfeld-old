import {Component, Input} from "@angular/core";
import {Match} from "../../entities/Match";

@Component({
  selector: 'match-overview-card',
  templateUrl: 'matchOverviewCard.component.html'
})
export class MatchOverviewCardComponent {

  @Input() match: Match;

  constructor() {

  }

}
