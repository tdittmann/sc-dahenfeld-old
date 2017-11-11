import {Component, OnInit} from "@angular/core";
import {Article} from "../../entities/Article";
import {NavParams} from "ionic-angular";
import {MatchService} from "../../services/match.service";

@Component({
  selector: 'game-report',
  templateUrl: 'gameReport.component.html'
})
export class GameReportComponent implements OnInit {

  matchId: string;
  gameReport: Article;

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private matchService: MatchService, private navParams: NavParams) {

  }

  ngOnInit(): void {
    this.matchId = this.navParams.data.id;

    this.matchService.loadGameReport(this.matchId).subscribe(
      (article) => {
        this.gameReport = article;
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
