import {Component, Input} from "@angular/core";

@Component({
  selector: 'separator',
  templateUrl: 'separator.component.html'
})
export class SeparatorComponent {

  @Input() text: string;

  constructor() {

  }

}
