import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";

@Injectable()
export class DevModeService {

  private static DB_KEY = "devMode";

  private devModeEnabled: boolean = false;

  constructor(private storage: Storage) {

  }

  isDevModeEnabled() {
    return this.devModeEnabled;
  }

  loadDevModeFromDb() {
    this.storage.get(DevModeService.DB_KEY).then(
      (devModeEnabled) => {
        this.devModeEnabled = devModeEnabled;
      }
    );
  }

  updateDevMode(devModeEnabled: boolean) {
    this.devModeEnabled = devModeEnabled;
    this.storage.set(DevModeService.DB_KEY, devModeEnabled);
  }

}
