import {Injectable} from "@angular/core";
import {Mannschaftsart} from "../entities/Mannschaftsart";
import {environment} from "../environments/environment";
import {Http} from "@angular/http";
import {RankingTeam} from "../entities/RankingTeam";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RankingService {

  constructor(private http: Http) {

  }

  loadRanking(team: Mannschaftsart): Observable<RankingTeam[]> {
    return this.http.get(environment.backendUrl + "table?team=" + team.toString())
      .map(response => response.json())
      .map(table => Object.keys(table).map(function (key) {
        return table[key];
      }));
  }

}
