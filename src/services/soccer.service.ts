import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Soccer} from "../entities/Soccer";
import {environment} from "../environments/environment";
import {SoccerUtils} from "../utils/SoccerUtils";
import {Mannschaftsart} from "../entities/Mannschaftsart";

@Injectable()
export class SoccerService {

  soccer: Soccer;

  constructor(private http: Http) {

  }

  loadTeamData(mannschaftsart: Mannschaftsart): Promise<Soccer> {
    this.soccer = new Soccer();
    this.soccer.team = mannschaftsart;

    // get data and fill variables
    this.http.get(environment.backendUrl + "fussball?mannschaftsart=" + mannschaftsart.toString())
      .subscribe(
        response => {
          let data = response.json();
          this.soccer.players = data.spieler;
          this.soccer.matches = data.spiele;
          this.soccer.table = SoccerUtils.calculateTable(this.soccer.matches);
        },
        error => {
          console.log(error);
          this.soccer.isError = true;
        }
      );

    return Promise.resolve(this.soccer);
  }

  loadTeamDataWithoutSaving(mannschaftsart: Mannschaftsart): Promise<Soccer> {
    let soccer: Soccer = new Soccer();
    soccer.team = mannschaftsart;

    // get data and fill variables
    this.http.get(environment.backendUrl + "fussball?mannschaftsart=" + mannschaftsart.toString())
      .subscribe(
        response => {
          let data = response.json();
          soccer.players = data.spieler;
          soccer.matches = data.spiele;
          soccer.table = SoccerUtils.calculateTable(soccer.matches);
        },
        error => {
          console.log(error);
          soccer.isError = true;
        }
      );

    return Promise.resolve(soccer);
  }

}
