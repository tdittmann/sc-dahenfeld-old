import {Component, Input} from "@angular/core";
import {LineupPlayer} from "../../entities/LineupPlayer";

// TODO tdit0703: Verschieben zu LineUp
@Component({
  selector: 'match-events',
  templateUrl: 'matchEvents.component.html'
})
export class MatchEventsComponent {

  @Input() showEventValue: boolean;
  @Input() showGoals: boolean;
  @Input() showYellowCard: boolean;
  @Input() showYellowRedCard: boolean;
  @Input() showRedCard: boolean;
  @Input() showSubstitution: boolean;
  @Input() player: LineupPlayer;

  constructor() {

  }

}
