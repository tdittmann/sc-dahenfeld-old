import {Component, Input} from "@angular/core";

@Component({
  selector: 'countdown-time',
  templateUrl: 'countdownTime.component.html'
})
export class CountdownTimeComponent {

  @Input() value: number;
  @Input() text: string;

  constructor() {

  }

}
