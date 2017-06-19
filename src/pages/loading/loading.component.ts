import {Component, Input} from "@angular/core";
@Component({
  selector: "loading",
  templateUrl: "loading.component.html"
})
export class LoadingComponent {

  @Input("isLoading") isLoading: boolean = false;
  @Input("message") message: string = "Daten werden geladen";

  constructor() {

  }

}
