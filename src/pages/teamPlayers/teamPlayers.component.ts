import {Component, OnInit} from "@angular/core";
import {ModalController, NavParams} from "ionic-angular";
import {PlayerComponent} from "../player/player.component";
import {Player} from "../../entities/Player";
import {PlayerService} from "../../services/player.service";
import {Mannschaftsart} from "../../entities/Mannschaftsart";

@Component({
  selector: 'team-players',
  templateUrl: "teamPlayers.component.html"
})
export class TeamPlayersComponent implements OnInit {

  team: Mannschaftsart;
  players: Player[] = [];
  currentPosition: string = "";

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private playerService: PlayerService, private modalCtrl: ModalController,
              private navParams: NavParams) {

  }

  ngOnInit(): void {
    this.team = this.navParams.data.id;

    this.playerService.loadPlayers(this.team).subscribe(
      (players) => {
        this.players = players;
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
        this.isError = true;
      }
    );
  }

  checkHeaderPosition(position: string) {
    let showHeader = (position != this.currentPosition);
    this.currentPosition = position;

    return showHeader;
  }

  openPlayer(player: Player) {
    let modal = this.modalCtrl.create(PlayerComponent, {params: player});
    modal.present();
  }

}
