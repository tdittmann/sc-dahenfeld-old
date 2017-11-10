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

  openMatch(match: Match) {
    if (match.home_result && match.away_result) {
      let modal = this.modalCtrl.create(MatchDetailComponent, {params: match.match_id});
      modal.present();
    }
  }

}
