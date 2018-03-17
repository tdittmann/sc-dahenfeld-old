import {Component, Input} from "@angular/core";
import {Match} from "../../entities/Match";

// TODO tdit0703: Verschieben zu Fixtures
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
