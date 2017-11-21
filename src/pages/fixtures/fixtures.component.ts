import {Component, OnInit, ViewChild} from "@angular/core";
import {Content, ModalController, NavParams} from "ionic-angular";
import {MatchDetailComponent} from "../matchDetail/matchDetail.component";
import {MatchService} from "../../services/match.service";
import {Mannschaftsart} from "../../entities/Mannschaftsart";
import {Match} from "../../entities/Match";
import {environment} from "../../environments/environment";

@Component({
  selector: 'fixtures-view',
  templateUrl: "fixtures.component.html"
})
export class FixturesComponent implements OnInit {

  @ViewChild(Content) content: Content;

  team: Mannschaftsart;
  matches: Match[] = [];
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
        this.actualMatchday = this.getActualMatchday();
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
        this.isError = true;
      }
    );

  }

  ionViewDidEnter() {
    let yOffset = document.getElementById("actualMatchday").offsetTop;
    this.content.scrollTo(0, yOffset, 1000);
  }

  openMatch(match: Match) {
    if (match.home_result && match.away_result) {
      let modal = this.modalCtrl.create(MatchDetailComponent, {params: match.match_id});
      modal.present();
    }
  }

  getIdForMatch(roundNumber: number) {
    if (roundNumber == this.actualMatchday) {
      return "actualMatchday";
    }

    return "";
  }

  private getActualMatchday(): number {
    let actualMatchday: number;
    let lastMatchday: number;
    let actualMatchdayDate = 9999999999999999;

    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].home_name == environment.teamName || this.matches[i].away_name == environment.teamName) {
        lastMatchday = this.matches[i].round_number;

        if (!this.matches[i].home_result && this.matches[i].date <= actualMatchdayDate) {
          actualMatchday = this.matches[i].round_number;
          actualMatchdayDate = this.matches[i].date;
        }
      }
    }

    // Fallback: use latest match
    if (!actualMatchday) {
      actualMatchday = lastMatchday;
    }

    return actualMatchday;
  }

}
