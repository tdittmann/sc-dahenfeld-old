import {Component, OnInit} from "@angular/core";
import {ArticleService} from "../../services/article.service";
import {NavController} from "ionic-angular";
import {FirstImagePipe} from "../../pipes/firstImage.pipe";
import {Article} from "../../entities/Article";
import {ArticleDetailCardComponent} from "../articleDetail/card/articleDetailCard.component";

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

  openArticle(pArticle: Article) {
    this.nav.push(ArticleDetailCardComponent, {
      parameter: pArticle
    });
  }

}
