import {Component, Input} from "@angular/core";

@Component({
  selector: 'page-state',
  templateUrl: 'pageState.component.html'
})
export class PageStateComponent {

  @Input("isLoading") loading: boolean = false;
  @Input("loadingMessage") loadingMessage: string = "Daten werden geladen";

  @Input("isError") error: boolean = false;
  @Input("errorMessage") errorMessage: string = "Daten konnten nicht geladen werden";
  @Input("errorIcon") errorIcon: string = "sad";

  constructor() {

  }

  public getMessage(): string {
    if (this.error) {
      return this.errorMessage;
    }
    return this.loadingMessage;
  }

}
