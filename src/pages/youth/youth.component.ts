import {Component, OnInit} from "@angular/core";
import {Soccer} from "../../entities/Soccer";
import {Mannschaftsart} from "../../entities/Mannschaftsart";
import {NavController} from "ionic-angular";
import {TeamDetailComponent} from "../teamDetail/teamDetail.component";
import {environment} from "../../environments/environment";
import {RankingService} from "../../services/ranking.service";
import {YouthRanking} from "../../entities/YouthRanking";

@Component({
  selector: 'youth',
  templateUrl: "youth.component.html"
})
export class YouthComponent implements OnInit {

  teams: YouthRanking[] = [];
  favTeam: string = environment.teamName;

  isError: boolean = false;

  constructor(private rankingService: RankingService, private nav: NavController) {

  }

  ngOnInit(): void {

    for (let team of Mannschaftsart.JUGEND) {
      this.rankingService.loadRanking(team).subscribe(
        (teamRanking) => {
          let youthRanking: YouthRanking = new YouthRanking();
          youthRanking.team = team;
          youthRanking.ranking = teamRanking;

          this.teams.push(youthRanking)
        },
        (error) => {
          this.isError = true;
          console.error("Can not load teamdata for " + team.toString(), error);
        }
      );
    }

  }

  openTeamDetails(team: Mannschaftsart) {
    this.nav.push(TeamDetailComponent, {parameter: team});
  }

}
