import {Component, Input} from "@angular/core";
import {ViewController} from "ionic-angular";

@Component({
  selector: 'modal-toolbar',
  templateUrl: 'modalToolbar.component.html'
})
export class ModalToolbarComponent {

  @Input("title") title = "";

  constructor(private viewCtrl: ViewController) {

  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }

}
