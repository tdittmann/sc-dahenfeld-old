import {Component, OnInit, ViewChild} from "@angular/core";
import {Content, Navbar, NavParams} from "ionic-angular";
import {ArticleService} from "../../services/article.service";
import {Article} from "../../entities/News";
import {SocialSharingService} from "../../services/socialSharing.service";

@Component({
  selector: "articleDetail",
  templateUrl: "articleDetail.component.html"
})
export class ArticleDetailComponent implements OnInit {

  @ViewChild(Content) content: Content;
  @ViewChild(Navbar) navbar: Navbar;

  article: Article;
  hideInformationIds = ['733', '755', '830'];

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
      this.removeFirstImage(this.article);
      this.isLoading = false;

    } else {

      // Get only the id of article and load complete article object
      this.articleService.loadArticle(this.navParams.data.parameter).subscribe(
        (news) => {
          this.article = news;
          this.removeFirstImage(this.article);
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

  private removeFirstImage(article: Article) {
    this.article.text = this.article.text.replace(/<img[^>]*>/,"");
  }

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
    return this.hideInformationIds.indexOf(newsId) == -1;
  }

}
