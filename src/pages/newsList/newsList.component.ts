import {Component, OnInit} from "@angular/core";
import {News} from "../../entities/News";
import {NewsService} from "../../services/news.service";
import {NavController, NavParams} from "ionic-angular";
import {FirstImagePipe} from "../../pipes/firstImage.pipe";
import {NewsDetailComponent} from "../newsDetail/newsDetail.component";
import {EventService} from "../../services/event.service";
import {Event} from "../../entities/Event";
import {EventComponent} from "../event/event.component";

@Component({
  templateUrl: "newsList.component.html"
})
export class NewsListComponent implements OnInit {

  event: Event;
  news: News[] = [];
  categoryId: number;
  heading: string = "News";

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private newsService: NewsService, private nav: NavController,
              private eventService: EventService, private navParams: NavParams) {

  }

  ngOnInit(): void {
    if (this.navParams.data.heading) {
      this.heading = this.navParams.data.heading;
    }

    if (this.navParams.data.parameter) {
      this.categoryId = this.navParams.data.parameter;
    }

    this.loadNews();
    this.loadEvents();

  }

  openNews(news: News) {
    this.nav.push(NewsDetailComponent, {
      parameter: news
    });
  }

  openEvent(event: Event) {
    this.nav.push(EventComponent, {parameter: event});
  }

  private loadNews() {
    this.newsService.loadAllNews(this.categoryId).subscribe(
      (news) => {
        this.news = news;

        // Get first image
        for (let n of this.news) {
          // This is needed, because sometimes it can happen that an imagename contains special chars
          // and escaping these does not work in frontend
          n.image = 'url("' + FirstImagePipe.transform(n.text) + '")';
        }

        this.isLoading = false;
      },
      (error) => {
        this.isError = true;
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
        console.error(error);
      }
    );
  }

}
