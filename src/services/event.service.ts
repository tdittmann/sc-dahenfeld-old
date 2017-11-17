import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {environment} from "../environments/environment";
import {EventEntry} from "../entities/EventEntry";
import {Match} from "../entities/Match";
import 'rxjs/Rx';
import {HttpClient} from "@angular/common/http";
import {Calendar} from "../entities/Calendar";

@Injectable()
export class EventService {

  constructor(private http: HttpClient) {

  }

  loadAllEvents(): Observable<EventEntry[]> {
    return this.http.get<EventEntry[]>(environment.backendUrl + "events");
  }

  loadCalendarEvents(): Observable<Calendar[]> {
    return this.http.get<Calendar[]>(environment.backendUrl + "calendar");
  }

}
