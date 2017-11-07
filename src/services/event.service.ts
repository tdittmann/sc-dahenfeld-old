import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {environment} from "../environments/environment";
import {EventEntry} from "../entities/EventEntry";
import {Match} from "../entities/Match";
import 'rxjs/Rx';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EventService {

  constructor(private http: HttpClient) {

  }

  loadAllEvents(): Observable<EventEntry[]> {
    return this.http.get<EventEntry[]>(environment.backendUrl + "veranstaltungen");
  }

  loadAllMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(environment.backendUrl + "vereinskalender");
  }

}
