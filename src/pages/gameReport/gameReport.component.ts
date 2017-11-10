import {Component, OnInit} from "@angular/core";
import {ArticleService} from "../../services/article.service";
import {Article} from "../../entities/Article";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'game-report',
  templateUrl: 'gameReport.component.html'
})
export class GameReportComponent implements OnInit {

  matchId: string;
  gameReport: Article;

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private articleService: ArticleService, private navParams: NavParams) {

  }

  ngOnInit(): void {
    this.matchId = this.navParams.data.id;

    this.articleService.loadGameReport(this.matchId).subscribe(
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
