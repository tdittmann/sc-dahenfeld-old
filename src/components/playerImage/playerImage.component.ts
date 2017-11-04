import {Component, Input} from "@angular/core";

@Component({
  selector: 'player-image',
  templateUrl: 'playerImage.component.html'
})
export class PlayerImageComponent {

  // TODO: Spielernummer mit hinzufügen

  @Input() img: string;

  constructor() {

  }

}
