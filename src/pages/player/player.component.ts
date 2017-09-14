import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";

@Component({
  templateUrl: 'player.component.html'
})
export class PlayerComponent {

  player: any = [];
  segmentType: string = "playerInfo";

  constructor(private navParams: NavParams, public viewCtrl: ViewController) {
    this.player = navParams.data.params;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
