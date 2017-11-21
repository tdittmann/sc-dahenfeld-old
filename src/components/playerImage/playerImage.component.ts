import {Component, Input} from "@angular/core";
import {environment} from "../../environments/environment";

@Component({
  selector: 'player-image',
  templateUrl: 'playerImage.component.html'
})
export class PlayerImageComponent {

  @Input() img: string;
  @Input() number: string;

  placeholderPlayer: string = environment.placeholderPlayer;
  siteUrl: string = environment.siteUrl;

  constructor() {

  }

}
