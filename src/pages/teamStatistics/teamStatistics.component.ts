import {Component, OnInit} from "@angular/core";
import {NavParams} from "ionic-angular";
import {PlayerService} from "../../services/player.service";
import {Mannschaftsart} from "../../entities/Mannschaftsart";
import {StatsPlayer} from "../../entities/StatsPlayer";

@Component({
  selector: 'team-statistics',
  templateUrl: 'teamStatistics.component.html'
})
export class TeamStatisticsComponent implements OnInit {

  team: Mannschaftsart;
  goalscorers: StatsPlayer[] = [];
  cardHolders: StatsPlayer[] = [];
  runners: StatsPlayer[] = [];

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private playerService: PlayerService,
              private navParams: NavParams) {

  }

  ngOnInit(): void {
    this.team = this.navParams.data.id;

    this.playerService.loadPlayers(this.team).subscribe(
      (players) => {

        players.forEach(player => {
          this.goalscorers.push(new StatsPlayer(player, player.seasonStats.goals, null, null));
          this.cardHolders.push(new StatsPlayer(player, player.seasonStats.yellowCards, player.seasonStats.yellowRedCards, player.seasonStats.redCards));
          this.runners.push(new StatsPlayer(player, player.seasonStats.playingMinutes, null, null));
        });

        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.isError = true;
        console.error(error);
      }
    );

  }
}
