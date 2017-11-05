import {Component, OnInit} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {Player} from "../../entities/Player";
import {environment} from "../../environments/environment";

@Component({
  selector: 'player-detail',
  templateUrl: 'player.component.html'
})
export class PlayerComponent implements OnInit {

  player: Player;

  constructor(private navParams: NavParams, private viewCtrl: ViewController) {

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
}
