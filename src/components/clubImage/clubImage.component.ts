import {Component, Input} from "@angular/core";

@Component({
  selector: 'club-image',
  templateUrl: 'clubImage.component.html'
})
export class ClubImageComponent {

  @Input() clubId: string;
  @Input() cssClass: string;

  constructor() {

  }

}
