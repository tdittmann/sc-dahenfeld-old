import {Component, Input} from "@angular/core";
import {Player} from "../../entities/Player";

@Component({
  selector: "playerInfo",
  templateUrl: "playerInfo.component.html"
})
export class PlayerInfoComponent {

  @Input("player")
  player: Player = new Player();

  constructor() {

  }

}
