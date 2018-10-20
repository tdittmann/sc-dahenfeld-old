import {Injectable} from "@angular/core";
import {Mannschaftsart} from "../entities/Mannschaftsart";
import {environment} from "../environments/environment";
import {RankingTeam} from "../entities/RankingTeam";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RankingJson} from "../entities/RankingJson";
import {map} from "rxjs/operators";

@Injectable()
export class RankingService {

  constructor(private http: HttpClient) {

  }

  loadRanking(team: Mannschaftsart): Observable<RankingTeam[]> {
    return this.http.get<RankingJson[]>(environment.backendUrl + "table?team=" + team.toString())
      .pipe(
        map(table => Object.keys(table).map(function (key) {
          return table[key];
        }))
      );
  }

}
