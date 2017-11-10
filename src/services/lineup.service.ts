import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LineupPlayer} from "../entities/LineupPlayer";
import {Observable} from "rxjs/Observable";
import {environment} from "../environments/environment";
import {Lineup} from "../entities/Lineup";

@Injectable()
export class LineupService {

  constructor(private http: HttpClient) {

  }

  loadLineup(matchId: string): Observable<Lineup> {
    return this.http.get<Lineup>(environment.backendUrl + "lineup?matchId=" + matchId);
  }

}
