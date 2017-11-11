import {Component, OnInit} from "@angular/core";
import {Soccer} from "../../entities/Soccer";
import {Mannschaftsart} from "../../entities/Mannschaftsart";
import {NavController} from "ionic-angular";
import {TeamDetailComponent} from "../teamDetail/teamDetail.component";
import {RankingService} from "../../services/ranking.service";
import {YouthRanking} from "../../entities/YouthRanking";

@Component({
  selector: 'youth',
  templateUrl: "youth.component.html"
})
export class YouthComponent implements OnInit {

  teams: YouthRanking[] = [];

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

          if (teamRanking.length > 0) {
            this.teams.push(youthRanking);

            this.teams.sort(function (a, b) {
              return (a.team > b.team) ? 1 : ((b.team > a.team) ? -1 : 0);
            });
          }
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
