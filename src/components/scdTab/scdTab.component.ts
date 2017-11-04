import {Component, Input} from "@angular/core";
import {Mannschaftsart} from "../../entities/Mannschaftsart";

@Component({
  selector: 'scd-tab',
  templateUrl: 'scdTab.component.html'
})
export class ScdTabComponent {

  @Input() title: string;
  @Input() team: Mannschaftsart;
  @Input() tab: any;

  constructor() {

  }

}
