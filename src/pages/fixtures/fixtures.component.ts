import {Component, OnInit} from "@angular/core";
import {ModalController, NavParams} from "ionic-angular";
import {MatchDetailComponent} from "../matchDetail/matchDetail.component";
import {MatchService} from "../../services/match.service";
import {Mannschaftsart} from "../../entities/Mannschaftsart";
import {Match} from "../../entities/Match";

@Component({
  selector: 'fixtures-view',
  templateUrl: "fixtures.component.html"
})
export class FixturesComponent implements OnInit {

  team: Mannschaftsart;
  matches: Match[] = [];

  lastDate: number = 0;
  actualMatchday: number = 0;

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private matchService: MatchService, private modalCtrl: ModalController,
              private navParams: NavParams) {

  }

  ngOnInit(): void {
    this.team = this.navParams.data.id;

    this.matchService.loadMatches(this.team).subscribe(
      (matches) => {
        this.matches = matches;
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
        this.isError = true;
      }
    );

  }

  // private getActualMatchday(): number {
  //   let actualMatchday: number;
  //   let lastMatchday: number;
  //   let actualMatchdayDate = 9999999999999999;
  //
  //   for (let i = 0; i < this.soccerService.soccer.matches.length; i++) {
  //     if (this.soccerService.soccer.matches[i].home_name == SoccerUtils.TEAM_NAME || this.soccerService.soccer.matches[i].away_name == SoccerUtils.TEAM_NAME) {
  //       lastMatchday = this.soccerService.soccer.matches[i].round_number;
  //
  //       if (!this.soccerService.soccer.matches[i].home_result && this.soccerService.soccer.matches[i].date <= actualMatchdayDate) {
  //         actualMatchday = this.soccerService.soccer.matches[i].round_number;
  //         actualMatchdayDate = this.soccerService.soccer.matches[i].date;
  //       }
  //     }
  //   }
  //
  //   // Fallback: nehme letztes Spiel des SCD
  //   if (!actualMatchday) {
  //     actualMatchday = lastMatchday;
  //   }
  //
  //   return actualMatchday;
  // }

  openMatch(matchId: string) {
    let modal = this.modalCtrl.create(MatchDetailComponent, {params: matchId});
    modal.present();
  }

}
