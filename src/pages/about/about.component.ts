import {Component, OnInit} from "@angular/core";
import {ToastService} from "../../services/toast.service";
import {DevModeService} from "../../services/devMode.service";

@Component({
  templateUrl: "about.component.html"
})
export class AboutComponent implements OnInit {

  version: string = "4.1.0";
  developer: string = "Timo Dittmann";

  private counter: number = 0;
  private devModeEnabledNumber = 7;

  constructor(private devModeService: DevModeService, private toastService: ToastService) {

  }

  ngOnInit(): void {

  }

  isDevModeEnabled(): boolean {
    return this.devModeService.isDevModeEnabled();
  }

  activateDevMode(): void {
    this.counter++;
    let message: string = "In " + (this.devModeEnabledNumber - this.counter) + " Schritten ist der Entwickler-Modus aktiviert."

    if (this.counter >= (this.devModeEnabledNumber - 3) && this.counter < this.devModeEnabledNumber) {
      this.toastService.showToast(message);
    }

    if (this.counter == this.devModeEnabledNumber) {
      this.devModeService.updateDevMode(true);
      this.toastService.showToast("Du hast den Entwickler-Modus aktiviert.");
    }
  }

  deactivateDevMode() {
    this.devModeService.updateDevMode(false);
    this.counter = 0;
    this.toastService.showToast("Entwickler-Modus deaktiviert.");
  }

}
