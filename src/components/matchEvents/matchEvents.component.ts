import {Component, Input, OnInit} from "@angular/core";
import {LineupPlayer} from "../../entities/LineupPlayer";

@Component({
  selector: 'match-events',
  templateUrl: 'matchEvents.component.html'
})
export class MatchEventsComponent implements OnInit {

  @Input() showEventValue: boolean;
  @Input() showGoals: boolean;
  @Input() showYellowCard: boolean;
  @Input() showYellowRedCard: boolean;
  @Input() showRedCard: boolean;
  @Input() showSubstitution: boolean;
  @Input() player: LineupPlayer;

  constructor() {

  }

  ngOnInit() {
    console.log(this.player);
  }

}
