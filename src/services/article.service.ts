import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";
import {Article} from "../entities/Article";
import {Observable} from "rxjs";
import "rxjs/Rx";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) {

  }

  loadArticles(categoryId: number): Observable<Article[]> {
    return this.http.get<Article[]>(environment.backendUrl + "news?categoryId=" + categoryId);
  }

  loadArticle(newsId: string): Observable<Article> {
    return this.http.get<Article[]>(environment.backendUrl + "news?id=" + newsId)
      .pipe(
        map(response => response[0])
      );
  }

  incrementMobileHitForArticle(pArticle: Article) {
    this.http.post(environment.backendUrl + "news", JSON.stringify(pArticle))
      .subscribe();
  }

}
