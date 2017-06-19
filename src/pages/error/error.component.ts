import {Component, Input} from "@angular/core";
@Component({
  selector: "error",
  templateUrl: "error.component.html"
})
export class ErrorComponent {

  @Input("isError") isError: boolean = false;
  @Input("icon") icon: string = "sad";
  @Input("message") message: string = "Daten konnten nicht geladen werden";

  constructor() {

  }

}
