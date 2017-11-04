import {Component, Input} from "@angular/core";
import {RankingTeam} from "../../entities/RankingTeam";
import {environment} from "../../environments/environment";

@Component({
  selector: 'ranking',
  templateUrl: 'ranking.component.html'
})
export class RankingComponent {

  @Input() teams: RankingTeam[];
  @Input() showPoints: boolean = true;
  @Input() showDiff: boolean = true;
  @Input() showMatches: boolean = true;
  @Input() showTeamImage: boolean = true;

  favTeam: string = environment.teamName;

  constructor() {

  }

}
