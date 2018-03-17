import {Component, OnInit} from "@angular/core";
import {Article} from "../../entities/Article";
import {ArticleDetailCardComponent} from "../articleDetail/card/articleDetailCard.component";
import {ArticleService} from "../../services/article.service";
import {NavController, NavParams} from "ionic-angular";
import {ImageUtils} from "../../utils/ImageUtils";

@Component({
  selector: 'blog',
  templateUrl: 'blog.component.html'
})
export class BlogComponent implements OnInit {

  heading: string = "";
  categoryId: number = 0;
  showArticleDate: boolean;

  articles: Article[];

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private articleService: ArticleService,
              private nav: NavController,
              private navParams: NavParams) {

  }

  ngOnInit(): void {
    this.categoryId = this.navParams.data.parameter.categoryId;
    this.heading = this.navParams.data.parameter.heading;
    this.showArticleDate = this.navParams.data.parameter.showDate;

    this.loadArticles();
  }

  private loadArticles() {
    this.articleService.loadArticles(this.categoryId).subscribe(
      (news) => {
        this.articles = news;

        for (let article of this.articles) {
          article.image = ImageUtils.getFirstImageFromText(article.text);
        }

        this.isLoading = false;
      },
      (error) => {
        this.isError = true;
        this.isLoading = false;
        console.error(error);
      }
    );
  }

  openArticle(pArticle: Article) {
    this.nav.push(ArticleDetailCardComponent, {
      parameter: pArticle
    });
  }

}
