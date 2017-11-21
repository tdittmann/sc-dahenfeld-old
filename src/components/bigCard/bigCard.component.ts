import {Component, Input} from "@angular/core";

@Component({
  selector: 'big-card',
  templateUrl: 'bigCard.component.html'
})
export class BigCardComponent {

  @Input('img') image: string;
  @Input() category: string;
  @Input() date: string;
  @Input() title: string;
  @Input() text: string;
  @Input() location: string;

  constructor() {

  }

}
