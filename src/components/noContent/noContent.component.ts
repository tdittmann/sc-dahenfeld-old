import {Component, Input} from "@angular/core";

// TODO tdit0703: Kann mit ErrorComponent zusammengefasst werden
@Component({
  selector: 'no-content',
  templateUrl: 'noContent.component.html'
})
export class NoContentComponent {

  @Input() message: string;
  @Input() icon: string;

  constructor() {

  }
}
