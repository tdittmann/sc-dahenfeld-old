import {Component, Input} from "@angular/core";

// TODO tdit0703: Wenn kein Bild gefunden wird: aus Internet ziehen!
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
