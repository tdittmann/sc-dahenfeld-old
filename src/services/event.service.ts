import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../environments/environment";
import {EventEntry} from "../entities/EventEntry";
import {Match} from "../entities/Match";
import 'rxjs/Rx';

@Injectable()
export class EventService {

  constructor(private http: Http) {

  }

  loadAllEvents(): Observable<EventEntry[]> {
    return this.http.get(environment.backendUrl + "veranstaltungen")
      .map(response => response.json());
  }

  loadAllMatches(): Observable<Match[]> {
    return this.http.get(environment.backendUrl + "vereinskalender")
      .map(response => response.json());
  }

}
