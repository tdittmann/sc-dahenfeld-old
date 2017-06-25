import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {environment} from "../environments/environment";
import {News} from "../entities/News";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class NewsService {

  constructor(private http: Http) {

  }

  loadAllNews(): Observable<News[]> {
    return this.http.get(environment.backendUrl + "news")
      .map(response => response.json());
  }

  loadNews(newsId: string): Observable<News> {

    console.log(environment.backendUrl + "news?id=" + newsId);

    return this.http.get(environment.backendUrl + "news?id=" + newsId)
      .map(response => {
        console.log(response);
        return response.json()[0];
      });
  }

  incrementMobileHitForNews(news: News) {
    this.http.post(environment.backendUrl + "news", JSON.stringify(news))
      .subscribe(
        (response) => {
          // Do nothing
        },
        (err) => {
          console.error(err);
        }
      );
  }

}
