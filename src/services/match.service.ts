import {environment} from "../environments/environment";
import {Injectable} from "@angular/core";
import {Mannschaftsart} from "../entities/Mannschaftsart";
import {Observable} from "rxjs";
import {Match} from "../entities/Match";
import {HttpClient} from "@angular/common/http";
import {Lineup} from "../entities/Lineup";
import {Article} from "../entities/Article";
import {MatchOverview} from "../entities/MatchOverview";
import {map} from "rxjs/operators";

@Injectable()
export class MatchService {

  constructor(private http: HttpClient) {

  }

  public loadMatches(team: Mannschaftsart): Observable<Match[]> {
    return this.http.get<Match[]>(environment.backendUrl + "matches?team=" + team.toString());
  }

  loadLineup(matchId: string): Observable<Lineup> {
    return this.http.get<Lineup>(environment.backendUrl + "lineup?matchId=" + matchId);
  }

  loadMatchOverview(matchId: string): Observable<MatchOverview> {
    return this.http.get<MatchOverview>(environment.backendUrl + "matchOverview?matchId=" + matchId);
  }

  loadGameReport(matchId: string): Observable<Article> {
    return this.http.get<Article[]>(environment.backendUrl + "gameReport?matchId=" + matchId)
      .pipe(
        map(response => {
          return response[0];
        })
      );
  }

}
