import {Component, OnInit} from "@angular/core";
import {SoccerService} from "../../services/soccer.service";
import {Soccer} from "../../entities/Soccer";
import {Mannschaftsart} from "../../entities/Mannschaftsart";
import {SoccerUtils} from "../../utils/SoccerUtils";
import {NavController} from "ionic-angular";
import {TeamDetailComponent} from "../teamDetail/teamDetail.component";

@Component({
  templateUrl: "youth.component.html"
})
export class YouthComponent implements OnInit {

  teams: Soccer[] = [];
  favTeam: string = SoccerUtils.TEAM_NAME;

  isError: boolean = false;

  constructor(private soccerService: SoccerService, private nav: NavController) {

  }

  ngOnInit(): void {

    for (let team of Mannschaftsart.JUGEND) {
      this.soccerService.loadTeamDataWithoutSaving(team).then(
        (teamData) => {
          this.teams.push(teamData);
        },
        (error) => {
          this.isError = true;
          console.error("Can not load teamdata for " + team.toString(), error);
        }
      )
    }

  }

  openTeamDetails(team: Mannschaftsart) {
    this.nav.push(TeamDetailComponent, {parameter: team});
  }

}
