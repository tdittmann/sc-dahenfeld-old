import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Article} from "../../entities/News";
import {ArticleService} from "../../services/article.service";
import {Content, Navbar, NavController} from "ionic-angular";
import {EventService} from "../../services/event.service";
import {ArticleDetailComponent} from "../articleDetail/articleDetail.component";
import {EventComponent} from "../event/event.component";
import {FirstImagePipe} from "../../pipes/firstImage.pipe";
import {EventEntry} from "../../entities/Event";

@Component({
  selector: "frontPage",
  templateUrl: "frontPage.component.html",
})
export class FrontPageComponent implements OnInit {

  @ViewChild(Content) content: Content;
  @ViewChild(Navbar) navbar: Navbar;

  event: EventEntry;
  featureArticles: Article[] = [];
  articles: Article[] = [];
  categoryId: number = 0;
  heading: string = "SC Dahenfeld 1946 e.V.";

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private newsService: ArticleService, private nav: NavController,
              private eventService: EventService, private element: ElementRef) {

  }

  ngOnInit(): void {
    // Add Listener on Scroll (Change Navbar Color)
    this.content.ionScroll.subscribe(() => {
      this.changeNavbarColor();
    });

    // Load Content
    this.loadArticles();
    // this.loadEvents();

    this.event = new EventEntry();
    this.event.text = "Das ist ein Test";
    this.event.start = "1507327200000";
    this.event.end = "1507413600000";
    this.event.title = "Dahenfelder Dorffest";
    this.event.image = "/media/com_tdevents/1507309229_human-110316_640.jpg";
  }

  private loadArticles() {
    this.newsService.loadArticles(this.categoryId).subscribe(
      (pArticles) => {
        this.articles = pArticles;

        // Get first image
        for (let article of this.articles) {
          // This is needed, because sometimes it can happen that an imagename contains special chars
          // and escaping these does not work in frontend
          article.image = 'url("' + FirstImagePipe.transform(article.text) + '")';
        }

        // First three articles are feature-articles
        for (let i = 0; i < 5; i++) {
          this.featureArticles.push(this.articles.shift());
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

  private loadEvents() {
    this.eventService.loadAllEvents().subscribe(
      (events) => {
        this.event = events[0];
      },
      (error) => {
        this.isError = true;
        this.isLoading = false;
        console.error(error);
      }
    );
  }

  private changeNavbarColor(): void {
    let sliderHeight = this.content.getContentDimensions().contentHeight * 0.60;

    if (this.content.getContentDimensions().scrollTop > sliderHeight) {
      this.navbar.setElementClass('navBar-color-onScroll', true);
    } else {
      this.navbar.setElementClass('navBar-color-onScroll', false);
    }
  }

  openArticle(pArticle: Article) {
    this.nav.push(ArticleDetailComponent, {
      parameter: pArticle
    });
  }

  openEvent(event: EventEntry) {
    this.nav.push(EventComponent, {parameter: event});
  }

}
