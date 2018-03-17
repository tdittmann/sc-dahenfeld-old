import {Component, OnInit, ViewChild} from "@angular/core";
import {Content, Navbar, NavParams} from "ionic-angular";
import {ArticleService} from "../../../services/article.service";
import {Article} from "../../../entities/Article";
import {SocialSharingService} from "../../../services/socialSharing.service";
import {environment} from "../../../environments/environment";
import {ImageUtils} from "../../../utils/ImageUtils";
import {NavbarUtils} from "../../../utils/NavbarUtils";

@Component({
  selector: "article-detail-lead-image",
  templateUrl: "articleDetailLeadImage.component.html"
})
export class ArticleDetailLeadImageComponent implements OnInit {

  @ViewChild(Content) content: Content;
  @ViewChild(Navbar) navbar: Navbar;

  article: Article;

  isLoading = true;
  isError = false;

  constructor(private navParams: NavParams, private articleService: ArticleService, private socialSharingService: SocialSharingService) {

  }

  ngOnInit(): void {
    // Add Listener on Scroll (Change Navbar Color)
    this.content.ionScroll.subscribe(() => {
      NavbarUtils.changeNavbarColor(this.content, this.navbar);
    });

    if (this.navParams.data.parameter instanceof Object) {

      // Get the whole article object from parent view
      this.article = this.navParams.data.parameter;
      this.article.text = ImageUtils.removeFirstImageFromText(this.article.text);
      this.isLoading = false;

    } else {

      // Get only the id of article and load complete article object
      this.articleService.loadArticle(this.navParams.data.parameter).subscribe(
        (news) => {
          this.article = news;
          this.article.image = ImageUtils.getFirstImageFromText(this.article.text);
          this.article.text = ImageUtils.removeFirstImageFromText(this.article.text);
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
