import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";
import {Article} from "../../../entities/Article";
import {ArticleService} from "../../../services/article.service";
import {SocialSharingService} from "../../../services/socialSharing.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'article-detail-card',
  templateUrl: 'articleDetailCard.component.html'
})
export class ArticleDetailCardComponent {

  article: Article;

  isLoading = true;
  isError = false;

  constructor(private navParams: NavParams, private articleService: ArticleService,
              private socialSharingService: SocialSharingService) {

    if (this.navParams.data.parameter instanceof Object) {
      // Get the whole article object from parent view
      this.article = this.navParams.data.parameter;
      this.isLoading = false;
    } else {
      // Get only the id of article and load complete article object
      this.articleService.loadArticle(this.navParams.data.parameter).subscribe(
        (news) => {
          this.article = news;
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
    return environment.hideInformationArticles.indexOf(newsId) == -1;
  }

}
