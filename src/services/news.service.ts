import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {environment} from "../environments/environment";
import {News} from "../entities/News";
import {Observable} from "rxjs/Observable";

@Injectable()
export class NewsService {

  constructor(private http: Http) {

  }

  loadAllNews(): Observable<News[]> {
    return this.http.get(environment.backendUrl + "news")
      .map(response => response.json());
  }

  loadNews(newsId: string): Observable<News> {
    return this.http.get(environment.backendUrl + "news?id=" + newsId)
      .map(response => response.json()[0]);
  }

  incrementMobileHitForNews(news: News) {
    this.http.post(environment.backendUrl + "news", JSON.stringify(news))
      .subscribe(
        (response) => {
          // Should do nothing
        },
        (err) => {
          console.error(err);
        }
      );
  }

}
