import {Component, Input} from "@angular/core";

@Component({
  selector: 'player-image',
  templateUrl: 'playerImage.component.html'
})
export class PlayerImageComponent {

  @Input() img: string;
  @Input() number: string;

  constructor() {

  }

}
