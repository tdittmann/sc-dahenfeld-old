import {Component, Input} from "@angular/core";
import {StatsPlayer} from "../../entities/StatsPlayer";
import {ModalController, NavController} from "ionic-angular";
import {StatsDetailListComponent} from "../../pages/statsDetailList/statsDetailList.component";
import {ImageUtils} from "../../utils/ImageUtil";

@Component({
  selector: 'player-stats-card',
  templateUrl: 'playerStatsCard.component.html'
})
export class PlayerStatsCardComponent {

  @Input("title") title: string;
  @Input("img") backgroundImage: string = "assets/img/pics/defaultStatsBackground.jpg";
  @Input("players") players: StatsPlayer[];

  @Input("col-icon-1") colIcon1 = "";
  @Input("col-icon-2") colIcon2 = "";
  @Input("col-icon-3") colIcon3 = "";

  @Input("show-col-2") showCol2 = false;
  @Input("show-col-3") showCol3 = false;

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) {

  }

  getBackgroundImage(): string {
    return ImageUtils.createCssBackgroundImageString(this.backgroundImage);
  }

  openStatistics(): void {
    let modal = this.modalCtrl.create(StatsDetailListComponent, {
      players: this.players,
      title: this.title,
      colIcon1: this.colIcon1,
      colIcon2: this.colIcon2,
      colIcon3: this.colIcon3,
      showCol2: this.showCol2,
      showCol3: this.showCol3
    });
    modal.present();
  }

}
