import {Component, Input} from "@angular/core";

@Component({
  selector: 'jersey',
  templateUrl: 'jersey.component.html'
})
export class JerseyComponent {

  @Input() jerseyNumber: number;

  constructor() {

  }

}
