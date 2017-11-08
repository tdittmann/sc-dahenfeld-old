import {Component, OnInit} from "@angular/core";
import {Article} from "../../entities/Article";
import {ArticleService} from "../../services/article.service";
import {NavController, NavParams} from "ionic-angular";
import {FirstImagePipe} from "../../pipes/firstImage.pipe";
import {ArticleDetailCardComponent} from "../articleDetail/card/articleDetailCard.component";

@Component({
  selector: 'oldies',
  templateUrl: "oldies.component.html"
})
export class OldiesComponent implements OnInit {

  articles: Article[] = [];
  categoryId: number = 109;
  heading: string = "Alte Herren";

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private articleService: ArticleService, private nav: NavController,
              private navParams: NavParams) {

  }

  ngOnInit(): void {
    if (this.navParams.data.heading) {
      this.heading = this.navParams.data.heading;
    }

    if (this.navParams.data.parameter) {
      this.categoryId = this.navParams.data.parameter;
    }

    this.loadArticles();
  }

  openArticle(pArticle: Article) {
    this.nav.push(ArticleDetailCardComponent, {
      parameter: pArticle
    });
  }

  private loadArticles() {
    this.articleService.loadArticles(this.categoryId).subscribe(
      (news) => {
        this.articles = news;

        // Get first image
        for (let article of this.articles) {
          // This is needed, because sometimes it can happen that an imagename contains special chars
          // and escaping these does not work in frontend
          article.image = 'url("' + FirstImagePipe.transform(article.text) + '")';
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

}
