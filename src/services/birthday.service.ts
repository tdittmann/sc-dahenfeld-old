import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Birthday} from "../entities/Birthday";
import {environment} from "../environments/environment";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class BirthdayService {

  constructor(private http: Http) {

  }

  loadAllBirthdays(): Observable<Birthday[]> {
    return this.http.get(environment.backendUrl + "birthdays")
      .map(response => response.json());
  }

}
