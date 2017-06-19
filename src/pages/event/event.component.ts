import {Component, OnInit} from "@angular/core";
import {NavParams} from "ionic-angular";

@Component({
  templateUrl: "event.component.html"
})
export class EventComponent implements OnInit {

  event: Event;

  constructor(private navParams: NavParams) {

  }

  ngOnInit(): void {
    this.event = this.navParams.data.parameter;
  }

}
