import {Component, OnInit} from "@angular/core";
import {NavParams} from "ionic-angular";
import {ArticleService} from "../../services/article.service";
import {Article} from "../../entities/News";
import {SocialSharingService} from "../../services/socialSharing.service";

@Component({
  templateUrl: "articleDetail.component.html"
})
export class ArticleDetailComponent implements OnInit {

  article: Article;
  hideInformationIds = ['733', '755', '830'];

  isLoading = true;
  isError = false;

  constructor(private navParams: NavParams, private articleService: ArticleService, private socialSharingService: SocialSharingService) {

  }

  ngOnInit(): void {

    if (this.navParams.data.parameter instanceof Object) {

      // Get the whole article object from parent view
      this.article = this.navParams.data.parameter;
      this.isLoading = false;

    } else {

      // Get only the id of article and load complete article object
      this.articleService.loadArticle(this.navParams.data.parameter).subscribe(
        (news) => {
          this.article = news;
          console.log(this.article);
          this.isLoading = false;
        },
        (error) => {
          this.isError = true;
          this.isLoading = false;
          console.error(error);
        }
      );

    }

    this.articleService.incrementMobileHitForArticle(this.article);
  }

  shareArticle(): void {
    this.socialSharingService.shareNews(this.article);
  }

  showInformation(newsId: string): boolean {
    return this.hideInformationIds.indexOf(newsId) == -1;
  }

}
