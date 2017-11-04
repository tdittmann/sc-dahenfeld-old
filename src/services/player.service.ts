import {Injectable} from "@angular/core";
import {Mannschaftsart} from "../entities/Mannschaftsart";
import {environment} from "../environments/environment";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Player} from "../entities/Player";

@Injectable()
export class PlayerService {

  constructor(private http: Http) {

  }

  loadPlayers(team: Mannschaftsart): Observable<Player[]> {
    return this.http.get(environment.backendUrl + "players?team=" + team.toString())
      .map(response => response.json());
  }

}
