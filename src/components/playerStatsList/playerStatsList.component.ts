import {Component, Input} from "@angular/core";
import {StatsPlayer} from "../../entities/StatsPlayer";

@Component({
  selector: 'player-stats-list',
  templateUrl: 'playerStatsList.component.html'
})
export class PlayerStatsListComponent {

  @Input("maxPlayers") maxPlayers: number = 0;
  @Input("players") players: StatsPlayer[];

  @Input("col-icon-1") colIcon1 = "";
  @Input("col-icon-2") colIcon2 = "";
  @Input("col-icon-3") colIcon3 = "";

  @Input("show-col-2") showCol2 = false;
  @Input("show-col-3") showCol3 = false;

  constructor() {

  }

}
