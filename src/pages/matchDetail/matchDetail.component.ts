import {Component, OnInit} from "@angular/core";
import {News} from "../../entities/News";
import {MatchDetail} from "../../entities/MatchDetail";
import {NavParams, ViewController} from "ionic-angular";
import {MatchService} from "../../services/match.service";
import {NewsService} from "../../services/news.service";
import {SocialSharingService} from "../../services/socialSharing.service";

@Component({
  templateUrl: "matchDetail.component.html"
})
export class MatchDetailComponent implements OnInit {

  news: News;
  selectedClub: string = "";

  type: string = "overview";
  isLoading: boolean = true;
  isError: boolean = false;
  match: MatchDetail = new MatchDetail();

  constructor(private matchService: MatchService, private navParams: NavParams,
              private viewCtrl: ViewController, private newsService: NewsService,
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
      this.newsService.loadNews(this.match.matchInformation.spielberichtId).subscribe(
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
    this.socialSharingService.share(this.news);
  }

  changeSelectedClub(clubId) {
    this.selectedClub = clubId;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
