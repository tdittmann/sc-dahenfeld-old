import {Component, Input} from "@angular/core";

@Component({
  selector: "playerStats",
  templateUrl: "playerStats.component.html"
})
export class PlayerStatsComponent {

  @Input("stats") stats: any;
  @Input("heading") heading: string = "Statistiken";
  @Input("information") information: string;

  constructor() {

  }

}
