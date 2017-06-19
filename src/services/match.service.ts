import {MatchDetail} from "../entities/MatchDetail";
import {Http} from "@angular/http";
import {environment} from "../environments/environment";
import {Injectable} from "@angular/core";

@Injectable()
export class MatchService {

  matchDetail: MatchDetail;

  constructor(private http: Http) {

  }

  public loadMatch(matchId: string): Promise<MatchDetail> {
    this.matchDetail = new MatchDetail();

    this.http.get(environment.backendUrl + "spiel.php?matchId=" + matchId)
      .subscribe(
        response => {
          let data = response.json();

          this.matchDetail.matchInformation = data.spielinfos;
          this.matchDetail.events = data.ereignisse;
          this.matchDetail.overview = data.ereignisse.concat(data.auswechslungen);
          this.matchDetail.substitutions = data.auswechslungen;
          this.matchDetail.lineup = data.startaufstellung;
        },
        error => {
          console.log(error);
          this.matchDetail.isError = true;
        }
      );

    return Promise.resolve(this.matchDetail);

  }

}
