import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Birthday} from "../entities/Birthday";
import {environment} from "../environments/environment";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class BirthdayService {

  constructor(private http: HttpClient) {

  }

  loadAllBirthdays(): Observable<Birthday[]> {
    return this.http.get<Birthday[]>(environment.backendUrl + "birthdays");
  }

}
