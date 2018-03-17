import {Component, OnInit, ViewChild} from "@angular/core";
import {Article} from "../../entities/Article";
import {ArticleService} from "../../services/article.service";
import {Content, Navbar, NavController} from "ionic-angular";
import {EventService} from "../../services/event.service";
import {ArticleDetailLeadImageComponent} from "../articleDetail/leadImage/articleDetailLeadImage.component";
import {EventComponent} from "../event/event.component";
import {EventEntry} from "../../entities/EventEntry";
import {NavbarUtils} from "../../utils/NavbarUtils";
import {ImageUtils} from "../../utils/ImageUtils";

@Component({
  selector: "front-page",
  templateUrl: "frontPage.component.html",
})
export class FrontPageComponent implements OnInit {

  @ViewChild(Content) content: Content;
  @ViewChild(Navbar) navbar: Navbar;

  eventEntry: EventEntry;
  featureArticles: Article[] = [];
  articles: Article[] = [];
  categoryId: number = 0;
  heading: string = "SC Dahenfeld 1946 e.V.";

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private newsService: ArticleService, private nav: NavController,
              private eventService: EventService) {

  }

  ngOnInit(): void {
    // Add Listener on Scroll (Change Navbar Color)
    this.content.ionScroll.subscribe(() => {
      NavbarUtils.changeNavbarColor(this.content, this.navbar);
    });

    // Load Content
    this.loadArticles();
    this.loadEvents();
  }

  private loadArticles() {
    this.newsService.loadArticles(this.categoryId).subscribe(
      (pArticles) => {
        this.articles = pArticles;
        for (let article of this.articles) {
          article.image = ImageUtils.getFirstImageFromText(article.text);
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
        this.eventEntry = events[0];
      },
      (error) => {
        this.isError = true;
        this.isLoading = false;
        console.error(error);
      }
    );
  }

  openArticle(pArticle: Article) {
    this.nav.push(ArticleDetailLeadImageComponent, {
      parameter: pArticle
    });
  }

  openEvent(event: EventEntry) {
    this.nav.push(EventComponent, {parameter: event});
  }

  getImageUrl(image: string): string {
    return EventEntry.getImageUrl(image);
  }

  getFormattedDate(start: string, end: string): string {
    return EventEntry.getFormattedDate(start, end);
  }

}
