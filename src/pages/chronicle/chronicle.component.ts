import {Component, OnInit} from "@angular/core";
import {ArticleService} from "../../services/article.service";
import {NavController} from "ionic-angular";
import {Article} from "../../entities/Article";
import {ArticleDetailCardComponent} from "../articleDetail/card/articleDetailCard.component";
import {ImageUtils} from "../../utils/ImageUtils";

@Component({
  selector: 'chronicle',
  templateUrl: 'chronicle.component.html'
})
export class ChronicleComponent implements OnInit {

  heading: string = "Chronik";
  categoryId: number = 155;

  articles: Article[];

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private articleService: ArticleService, private nav: NavController) {

  }

  ngOnInit(): void {
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
