import {Component, OnInit} from "@angular/core";
import {NavParams} from "ionic-angular";
import {NewsService} from "../../services/news.service";
import {News} from "../../entities/News";
import {SocialSharingService} from "../../services/socialSharing.service";

@Component({
  templateUrl: "newsDetail.component.html"
})
export class NewsDetailComponent implements OnInit {

  news: News;
  hideInformationIds = ['733', '755', '830'];

  isLoading = true;
  isError = false;

  constructor(private navParams: NavParams, private newsService: NewsService, private socialSharingService: SocialSharingService) {

  }

  ngOnInit(): void {

    if (this.navParams.data.parameter instanceof Object) {

      // Get the whole news object from parent view
      this.news = this.navParams.data.parameter;
      this.isLoading = false;

    } else {

      // Get only the id of news and load complete news object
      this.newsService.loadNews(this.navParams.data.parameter).subscribe(
        (news) => {
          this.news = news;
          console.log(this.news);
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          this.isError = true;
          console.error(error);
        }
      );

    }

    this.newsService.incrementMobileHitForNews(this.news);
  }

  shareNews(): void {
    this.socialSharingService.shareNews(this.news);
  }

  showInformation(newsId: string): boolean {
    return this.hideInformationIds.indexOf(newsId) == -1;
  }

}
