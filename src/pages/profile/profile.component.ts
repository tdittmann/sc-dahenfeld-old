import {Component, OnInit} from "@angular/core";
import {Profile} from "../../entities/Profile";
import {Storage} from "@ionic/storage";
import {ProfileService} from "../../services/profile.service";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {

  profile: Profile = new Profile();

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private storage: Storage, private profileService: ProfileService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {

    this.loadTokenFromLocalStorage().then(
      (token: string) => {
        this.profile.pushToken = token;
        this.loadProfileFromRemoteDb(token);
      },
      (error) => {
        console.error("Can not load from local storage: " + error);
        this.isError = true;
        this.isLoading = false;
      }
    );

  }

  saveProfile() {
    this.profileService.saveInRemoteDb(this.profile).subscribe(
      (result: Profile) => {
        console.log("Profile saved: " + result);
        this.toastService.showToast("Ihr Profil wurde erfolgreich aktualisiert")
      },
      (error) => {
        this.toastService.showToast("Speichern fehlgeschlagen! Bitte erneut versuchen.")
        console.error("Saving profile failed: ");
        console.error(error);
      }
    );
  }

  private loadProfileFromRemoteDb(token: string) {
    this.profileService.loadFromRemoteDb(token).subscribe(
      (profile: Profile) => {
        this.profile = profile;
        this.isLoading = false;
      },
      (error) => {
        console.error("Can not load profile from remote db: " + error);
        this.isError = true;
        this.isLoading = false;
      }
    )
    ;
  }

  private loadTokenFromLocalStorage(): Promise<string> {
    return this.storage.get("pushToken");
  }

}
