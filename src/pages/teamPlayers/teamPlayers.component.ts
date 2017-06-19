import {Component, OnInit} from "@angular/core";
import {SoccerService} from "../../services/soccer.service";
import {ModalController} from "ionic-angular";
import {PlayerComponent} from "../player/player.component";

@Component({
  templateUrl: "teamPlayers.component.html"
})
export class TeamPlayersComponent implements OnInit {

  currentPosition: string = "";

  constructor(public soccerService: SoccerService, private modalCtrl: ModalController) {

  }

  ngOnInit(): void {
  }

  checkHeaderPosition(position: string) {
    let showHeader = (position != this.currentPosition);
    this.currentPosition = position;

    return showHeader;
  }

  openPlayer(player) {
    let modal = this.modalCtrl.create(PlayerComponent, {params: player});
    modal.present();
  }

}
