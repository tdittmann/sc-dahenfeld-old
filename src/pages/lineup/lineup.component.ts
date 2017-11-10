import {Component, OnInit} from "@angular/core";
import {NavParams} from "ionic-angular";
import {LineupService} from "../../services/lineup.service";
import {environment} from "../../environments/environment";
import {Lineup} from "../../entities/Lineup";
import {LineupPlayer} from "../../entities/LineupPlayer";

@Component({
  selector: 'lineup',
  templateUrl: 'lineup.component.html'
})
export class LineupComponent implements OnInit {

  selectedTeam: string = environment.teamName;
  lineup: Lineup;
  players: LineupPlayer[];

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private navParams: NavParams, private lineupService: LineupService) {

  }

  ngOnInit(): void {
    let matchId = this.navParams.data.id;

    this.lineupService.loadLineup(matchId).subscribe(
      (lineup) => {
        this.lineup = lineup;

        this.players = Object.keys(this.lineup.lineup).map(function (key) {
          return lineup.lineup[key];
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

  changeSelectedClub(teamName: string) {
    this.selectedTeam = teamName;
  }

  isPlayerInSelectedTeam(teamId: number) {
    let clubId: number = this.getClubId();
    return teamId == clubId;
  }

  getPlayerNameById(teamplayerId: number): string {
    let player: LineupPlayer = this.players.find(lineupPlayer => lineupPlayer.teamplayerId == teamplayerId);
    return player.firstname + ' ' + player.lastname;
  }

  areThereSubstitutions() {
    let clubId: number = this.getClubId();
    let players: LineupPlayer[] = this.players.filter(lineupPlayer => lineupPlayer.clubId == clubId && lineupPlayer.substitution);
    return players.length > 0;
  }

  private getClubId(): number {
    if (this.lineup.matchInfo.home_name == this.selectedTeam) {
      return this.lineup.matchInfo.home_id;
    } else {
      return this.lineup.matchInfo.away_id;
    }
  }

}
