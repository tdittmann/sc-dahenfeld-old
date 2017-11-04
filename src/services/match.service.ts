import {MatchDetail} from "../entities/MatchDetail";
import {Http} from "@angular/http";
import {environment} from "../environments/environment";
import {Injectable} from "@angular/core";
import {Mannschaftsart} from "../entities/Mannschaftsart";
import {Observable} from "rxjs/Observable";
import {Match} from "../entities/Match";

@Injectable()
export class MatchService {

  constructor(private http: Http) {

  }

  public loadMatches(team: Mannschaftsart): Observable<Match[]> {
    return this.http.get(environment.backendUrl + "matches?team=" + team.toString())
      .map(response => response.json());
  }

  public loadMatch(matchId: string): Promise<MatchDetail> {
    let matchDetail: MatchDetail = new MatchDetail();

    this.http.get(environment.backendUrl + "match.php?matchId=" + matchId)
      .subscribe(
        response => {
          let data = response.json();

          matchDetail.matchInformation = data.spielinfos;
          matchDetail.events = data.ereignisse;
          matchDetail.overview = data.ereignisse.concat(data.auswechslungen)
            .sort((a, b) => a.zeit > b.zeit);
          matchDetail.substitutions = data.auswechslungen;
          matchDetail.lineup = data.startaufstellung;
        },
        error => {
          matchDetail.isError = true;
          console.error(error);
        }
      );

    return Promise.resolve(matchDetail);
  }

}
