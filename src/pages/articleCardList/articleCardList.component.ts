import {Component, OnInit} from "@angular/core";
import {Article} from "../../entities/News";
import {ArticleService} from "../../services/article.service";
import {NavController, NavParams} from "ionic-angular";
import {FirstImagePipe} from "../../pipes/firstImage.pipe";
import {ArticleDetailComponent} from "../articleDetail/articleDetail.component";
import {EventEntry} from "../../entities/EventEntry";
import {EventComponent} from "../event/event.component";

@Component({
  templateUrl: "articleCardList.component.html"
})
export class ArticleCardListComponent implements OnInit {

  articles: Article[] = [];
  categoryId: number;
  heading: string = "";

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
    this.nav.push(ArticleDetailComponent, {
      parameter: pArticle
    });
  }

  openEvent(event: EventEntry) {
    this.nav.push(EventComponent, {parameter: event});
  }

  private loadArticles() {
    this.articleService.loadArticles(this.categoryId).subscribe(
      (news) => {
        this.articles = news;

        // Get first image
        for (let n of this.articles) {
          // This is needed, because sometimes it can happen that an imagename contains special chars
          // and escaping these does not work in frontend
          n.image = 'url("' + FirstImagePipe.transform(n.text) + '")';
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
