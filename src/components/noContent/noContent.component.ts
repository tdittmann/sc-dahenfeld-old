import {Component, Input} from "@angular/core";

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
