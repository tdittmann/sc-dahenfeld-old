import {Injectable} from "@angular/core";
import {Mannschaftsart} from "../entities/Mannschaftsart";
import {environment} from "../environments/environment";
import {RankingTeam} from "../entities/RankingTeam";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {RankingJson} from "../entities/RankingJson";

@Injectable()
export class RankingService {

  constructor(private http: HttpClient) {

  }

  loadRanking(team: Mannschaftsart): Observable<RankingTeam[]> {
    return this.http.get<RankingJson[]>(environment.backendUrl + "table?team=" + team.toString())
      .map(table => Object.keys(table).map(function (key) {
        return table[key];
      }));
  }

}
