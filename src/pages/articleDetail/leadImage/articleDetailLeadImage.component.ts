import {Component, OnInit, ViewChild} from "@angular/core";
import {Content, Navbar, NavParams} from "ionic-angular";
import {ArticleService} from "../../../services/article.service";
import {Article} from "../../../entities/Article";
import {SocialSharingService} from "../../../services/socialSharing.service";
import {environment} from "../../../environments/environment";
import {FirstImagePipe} from "../../../pipes/firstImage.pipe";
import {ImageUtils} from "../../../utils/ImageUtil";

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
      this.changeNavbarColor();
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
          this.article.image = ImageUtils.createCssBackgroundImageString(FirstImagePipe.transform(this.article.text));
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

  // TODO tdit0703: auslagern, da doppelter Code!!!
  private changeNavbarColor(): void {
    let sliderHeight = this.content.getContentDimensions().contentHeight * 0.60;

    if (this.content.getContentDimensions().scrollTop > sliderHeight) {
      this.navbar.setElementClass('navBar-color-onScroll', true);
    } else {
      this.navbar.setElementClass('navBar-color-onScroll', false);
    }
  }

  shareArticle(): void {
    this.socialSharingService.shareNews(this.article);
  }

  showInformation(newsId: string): boolean {
    return environment.hideInformationArticles.indexOf(newsId) == -1;
  }

}
