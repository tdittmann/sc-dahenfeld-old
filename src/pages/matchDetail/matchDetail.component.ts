import {Component, OnInit} from "@angular/core";
import {Article} from "../../entities/News";
import {MatchDetail} from "../../entities/MatchDetail";
import {NavParams, ViewController} from "ionic-angular";
import {MatchService} from "../../services/match.service";
import {ArticleService} from "../../services/article.service";
import {SocialSharingService} from "../../services/socialSharing.service";

@Component({
  templateUrl: "matchDetail.component.html"
})
export class MatchDetailComponent implements OnInit {

  news: Article;
  selectedClub: string = "";

  type: string = "overview";
  isLoading: boolean = true;
  isError: boolean = false;
  match: MatchDetail = new MatchDetail();

  constructor(private matchService: MatchService, private navParams: NavParams,
              private viewCtrl: ViewController, private newsService: ArticleService,
              private socialSharingService: SocialSharingService) {

  }

  ngOnInit(): void {
    let matchId: string = this.navParams.data.params;

    this.matchService.loadMatch(matchId).then(
      (matchDetails) => {
        this.isLoading = false;
        this.match = matchDetails;
      },
      (error) => {
        this.isError = true;
        this.isLoading = false;
        console.error(error);
      }
    )
  }

  setInitialSelectedTeam() {
    if (this.selectedClub == "") {
      this.selectedClub = this.match.matchInformation.home_id;
    }
  }

  getSpielbericht() {

    if (!this.news) {
      this.newsService.loadArticle(this.match.matchInformation.spielberichtId).subscribe(
        (news) => {
          this.news = news;
        },
        (error) => {
          console.error(error);
        }
      );
    }

  }

  shareNews(): void {
    this.socialSharingService.shareNews(this.news);
  }

  changeSelectedClub(clubId) {
    this.selectedClub = clubId;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
