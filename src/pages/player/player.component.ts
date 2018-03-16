import {Component, OnInit} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {Player} from "../../entities/Player";
import {environment} from "../../environments/environment";
import {DevModeService} from "../../services/devMode.service";

@Component({
  selector: 'player-detail',
  templateUrl: 'player.component.html'
})
export class PlayerComponent implements OnInit {

  player: Player;

  constructor(private navParams: NavParams, private viewCtrl: ViewController,
              private devModeService: DevModeService) {

  }

  ngOnInit(): void {
    this.player = this.navParams.data.params;
  }

  getPlayerImage(image: string): string {
    let prefix: string = 'url("';
    let suffix: string = '")';

    if (image) {
      return prefix + environment.siteUrl + '/' + image + suffix;
    }

    return prefix + environment.placeholderPlayer + suffix;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  isDevModeEnabled(): boolean {
    return this.devModeService.isDevModeEnabled();
  }
}
