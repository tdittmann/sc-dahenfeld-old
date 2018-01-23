import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs/Observable";
import {Profile} from "../entities/Profile";

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) {

  }

  loadFromRemoteDb(token: string): Observable<Profile> {
    return this.http.get<Profile>(environment.backendUrl + "profile?token=" + token);
  }

  saveInRemoteDb(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(environment.backendUrl + "profile", JSON.stringify(profile));
  }

}
