import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";
import {Article} from "../entities/Article";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) {

  }

  loadArticles(categoryId: number): Observable<Article[]> {
    return this.http.get<Article[]>(environment.backendUrl + "news?categoryId=" + categoryId);
  }

  loadArticle(newsId: string): Observable<Article> {
    return this.http.get<Article[]>(environment.backendUrl + "news?id=" + newsId)
      .map(response => {
        return response[0];
      });
  }

  loadGameReport(matchId: string): Observable<Article> {
    return this.http.get<Article[]>(environment.backendUrl + "gameReport?matchId=" + matchId)
      .map(response => {
        return response[0];
      });
  }

  incrementMobileHitForArticle(pArticle: Article) {
    this.http.post(environment.backendUrl + "news", JSON.stringify(pArticle))
      .subscribe();
  }

}
