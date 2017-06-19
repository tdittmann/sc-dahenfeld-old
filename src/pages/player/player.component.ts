import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";

@Component({
  templateUrl: 'player.component.html'
})
export class PlayerComponent {

  spieler: any = [];

  constructor(private navParams: NavParams, public viewCtrl: ViewController) {
    this.spieler = navParams.data.params;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
