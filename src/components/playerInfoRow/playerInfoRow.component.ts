import {Component, Input} from "@angular/core";

@Component({
  selector: 'player-info-row',
  templateUrl: 'playerInfoRow.component.html'
})
export class PlayerInfoRowComponent {

  @Input() text: string;
  @Input() value: string;

  constructor() {

  }

}
