import {Component, Input} from "@angular/core";

@Component({
  selector: "leadimage",
  templateUrl: "leadimage.component.html"
})
export class LeadImageComponent {

  @Input('src')
  imageSrc: string = "";

  constructor() {

  }

}
