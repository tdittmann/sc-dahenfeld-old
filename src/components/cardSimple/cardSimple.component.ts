import {Component, Input} from "@angular/core";

@Component({
  selector: 'card-simple',
  templateUrl: 'cardSimple.component.html'
})
export class CardSimpleComponent {

  @Input('img') image: string;
  @Input('title') title: string;
  @Input('subTitle') subTitle: string;

  constructor() {

  }

}
