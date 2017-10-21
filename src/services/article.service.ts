import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {environment} from "../environments/environment";
import {Article} from "../entities/Article";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class ArticleService {

  constructor(private http: Http) {

  }

  loadArticles(categoryId: number): Observable<Article[]> {
    return this.http.get(environment.backendUrl + "news?categoryId=" + categoryId)
      .map(response => response.json());
  }

  loadArticle(newsId: string): Observable<Article> {
    return this.http.get(environment.backendUrl + "news?id=" + newsId)
      .map(response => {
        return response.json()[0];
      });
  }

  incrementMobileHitForArticle(pArticle: Article) {
    this.http.post(environment.backendUrl + "news", JSON.stringify(pArticle))
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
