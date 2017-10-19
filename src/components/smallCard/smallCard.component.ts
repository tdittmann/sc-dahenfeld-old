import {Component, Input} from "@angular/core";

@Component({
  selector: 'smallCard',
  templateUrl: 'smallCard.component.html'
})
export class SmallCardComponent {

  @Input('img') image: string;
  @Input('title') title: string;
  @Input('subTitle') subTitle: string;

  constructor() {

  }

}
