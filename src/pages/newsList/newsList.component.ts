import {Component, OnInit} from "@angular/core";
import {News} from "../../entities/News";
import {NewsService} from "../../services/news.service";
import {NavController} from "ionic-angular";
import {FirstImagePipe} from "../../pipes/firstImage.pipe";
import {NewsDetailComponent} from "../newsDetail/newsDetail.component";
import {EventService} from "../../services/event.service";
import {Event} from "../../entities/Event";
import {EventComponent} from "../event/event.component";

@Component({
  templateUrl: "newsList.component.html"
})
export class NewsListComponent implements OnInit {

  news: News[] = [];
  event: Event;
  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private newsService: NewsService, private nav: NavController, private eventService: EventService) {

  }

  ngOnInit(): void {

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
    this.newsService.loadAllNews().subscribe(
      (news) => {
        this.news = news;

        // Get first image
        for (let n of this.news) {
          n.image = FirstImagePipe.transform(n.text);
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
