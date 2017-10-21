import {Component, Input} from "@angular/core";

@Component({
  selector: 'big-card',
  templateUrl: 'bigCard.component.html'
})
export class BigCardComponent {

  @Input('img') image: string;
  @Input('category') category: string;
  @Input('date') date: string;
  @Input('title') title: string;
  @Input('text') text: string;

  constructor() {

  }

}
