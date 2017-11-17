import {Component, Input} from "@angular/core";
import {Match} from "../../entities/Match";

@Component({
  selector: 'match-overview',
  templateUrl: 'matchOverview.component.html'
})
export class MatchOverviewComponent {

  @Input() match: Match;
  @Input() showRoundNumber: boolean;
  @Input() showMatchDate: boolean;
  @Input() showTeamName: boolean;
  @Input() showLocation: boolean;
  @Input() isNextMatch: boolean;

  constructor() {

  }

}
