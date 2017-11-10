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

}
