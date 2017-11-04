import {Component, Input} from "@angular/core";
import {RankingTeam} from "../../entities/RankingTeam";
import {environment} from "../../environments/environment";

@Component({
  selector: 'ranking',
  templateUrl: 'ranking.component.html'
})
export class RankingComponent {

  @Input() teams: RankingTeam[];
  favTeam: string = environment.teamName;

  constructor() {

  }

}
