import {Component, Input} from "@angular/core";

// TODO tdit0703: ListSeparatorComponent???
@Component({
  selector: 'separator',
  templateUrl: 'separator.component.html'
})
export class SeparatorComponent {

  @Input() text: string;

  constructor() {

  }

}
