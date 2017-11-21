import {Injectable} from "@angular/core";
import {Mannschaftsart} from "../entities/Mannschaftsart";
import {environment} from "../environments/environment";
import {Observable} from "rxjs/Observable";
import {Player} from "../entities/Player";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PlayerService {

  constructor(private http: HttpClient) {

  }

  loadPlayers(team: Mannschaftsart): Observable<Player[]> {
    return this.http.get<Player[]>(environment.backendUrl + "players?team=" + team.toString());
  }

}
