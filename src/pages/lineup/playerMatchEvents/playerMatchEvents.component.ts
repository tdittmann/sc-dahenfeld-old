import {Component, Input} from "@angular/core";
import {LineupPlayer} from "../../../entities/LineupPlayer";

@Component({
  selector: 'player-match-events',
  templateUrl: 'playerMatchEvents.component.html'
})
export class PlayerMatchEventsComponent {

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
