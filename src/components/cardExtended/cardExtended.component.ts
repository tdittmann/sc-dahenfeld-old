import {Component, Input} from "@angular/core";

@Component({
  selector: 'card-extended',
  templateUrl: 'cardExtended.component.html'
})
export class CardExtendedComponent {

  @Input('img') image: string;
  @Input("category") category: string;
  @Input("date") date: string;
  @Input("title") title: string;
  @Input("text") text: string;
  @Input("location") location: string;

  @Input("showCategory") showCategory: boolean = true;
  @Input("showDate") showDate: boolean = true;
  @Input("showLocation") showLocation: boolean = true;

  constructor() {

  }

}
