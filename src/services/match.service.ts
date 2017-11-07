import {MatchDetail} from "../entities/MatchDetail";
import {environment} from "../environments/environment";
import {Injectable} from "@angular/core";
import {Mannschaftsart} from "../entities/Mannschaftsart";
import {Observable} from "rxjs/Observable";
import {Match} from "../entities/Match";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MatchService {

  constructor(private http: HttpClient) {

  }

  public loadMatches(team: Mannschaftsart): Observable<Match[]> {
    return this.http.get<Match[]>(environment.backendUrl + "matches?team=" + team.toString());
  }

  public loadMatch(matchId: string): Promise<MatchDetail> {
    let matchDetail: MatchDetail = new MatchDetail();

    // this.http.get(environment.backendUrl + "match.php?matchId=" + matchId)
    //   .subscribe(
    //     response => {
    //       let data = response.json();
    //
    //       matchDetail.matchInformation = data.spielinfos;
    //       matchDetail.events = data.ereignisse;
    //       matchDetail.overview = data.ereignisse.concat(data.auswechslungen)
    //         .sort((a, b) => a.zeit > b.zeit);
    //       matchDetail.substitutions = data.auswechslungen;
    //       matchDetail.lineup = data.startaufstellung;
    //     },
    //     error => {
    //       matchDetail.isError = true;
    //       console.error(error);
    //     }
    //   );

    return Promise.resolve(matchDetail);
  }

}
