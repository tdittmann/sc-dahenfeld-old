import {Component, Input} from "@angular/core";

@Component({
  selector: 'simple-button',
  templateUrl: 'simpleButton.component.html'
})
export class SimpleButtonComponent {

  @Input("text") text: string;
  @Input("icon") icon: string;
  @Input("color") color: string = "primary";

  constructor() {

  }

}
