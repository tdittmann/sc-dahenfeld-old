import {Component, Input} from "@angular/core";

// TODO tdit0703: verschieben zu LineUp
@Component({
  selector: 'jersey',
  templateUrl: 'jersey.component.html'
})
export class JerseyComponent {

  @Input() jerseyNumber: number;

  constructor() {

  }

}
