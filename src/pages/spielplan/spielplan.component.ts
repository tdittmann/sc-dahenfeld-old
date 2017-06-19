import {Component, OnInit} from "@angular/core";
import {SoccerUtils} from "../../utils/SoccerUtils";
import {SoccerService} from "../../services/soccer.service";
import {ModalController} from "ionic-angular";
import {MatchDetailComponent} from "../matchDetail/matchDetail.component";

@Component({
  templateUrl: "spielplan.component.html"
})
export class SpielplanComponent implements OnInit {

  lastDate: number = 0;
  actualMatchday: number = 0;
  maxMatchday: number = 0;

  constructor(public soccerService: SoccerService, private modalCtrl: ModalController) {

  }

  ngOnInit(): void {
    this.actualMatchday = this.getActualMatchday();
    this.maxMatchday = this.getMaxMatchday();
  }

  isFavoriteTeam(match) {
    return (match.home_name == SoccerUtils.TEAM_NAME || match.away_name == SoccerUtils.TEAM_NAME);
  }

  private getActualMatchday(): number {
    let actualMatchday: number;
    let lastMatchday: number;
    let actualMatchdayDate = 9999999999999999;

    for (let i = 0; i < this.soccerService.soccer.matches.length; i++) {
      if (this.soccerService.soccer.matches[i].home_name == SoccerUtils.TEAM_NAME || this.soccerService.soccer.matches[i].away_name == SoccerUtils.TEAM_NAME) {
        lastMatchday = this.soccerService.soccer.matches[i].round_number;

        if (!this.soccerService.soccer.matches[i].home_result && this.soccerService.soccer.matches[i].date <= actualMatchdayDate) {
          actualMatchday = this.soccerService.soccer.matches[i].round_number;
          actualMatchdayDate = this.soccerService.soccer.matches[i].date;
        }
      }
    }

    // Fallback: nehme letztes Spiel des SCD
    if (!actualMatchday) {
      actualMatchday = lastMatchday;
    }

    return actualMatchday;
  }

  private getMaxMatchday(): number {
    let maxMatchday: number = 0;

    for (let i = 0; i < this.soccerService.soccer.matches.length; i++) {
      if (+this.soccerService.soccer.matches[i].round_number > +this.maxMatchday) {
        maxMatchday = this.soccerService.soccer.matches[i].round_number;
      }
    }

    return maxMatchday;
  }

  nextMatchday(): void {
    this.lastDate = 0;
    if (this.actualMatchday < this.maxMatchday) {
      this.actualMatchday++;

      // If there is a roundNumber without a match
      if (!this.atLeastOneMatchOnSpieltag(this.actualMatchday)) {
        this.nextMatchday();
      }
    }
  }

  previousMatchday() {
    this.lastDate = 0;
    if (this.actualMatchday > 1) {
      this.actualMatchday--;

      // If there is a roundNumber without a match
      if (!this.atLeastOneMatchOnSpieltag(this.actualMatchday)) {
        this.previousMatchday();
      }
    }
  }

  hasSameMatchDay(timestamp: number) {
    let matchDate = new Date(timestamp);
    let lastMatchDate = new Date(this.lastDate);
    let showHeader = (lastMatchDate.getDate() != matchDate.getDate());

    this.lastDate = timestamp;

    return showHeader;
  }

  private atLeastOneMatchOnSpieltag(roundNumber: number): boolean {
    for (let i = 0; i < this.soccerService.soccer.matches.length; i++) {
      if (this.soccerService.soccer.matches[i].round_number == roundNumber) {
        return true;
      }
    }

    return false;
  }

  openMatch(matchId: string) {
    let modal = this.modalCtrl.create(MatchDetailComponent, {params: matchId});
    modal.present();
  }

}
