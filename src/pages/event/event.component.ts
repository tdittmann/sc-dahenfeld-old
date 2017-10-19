import {Component, OnInit} from "@angular/core";
import {NavParams} from "ionic-angular";
import {EventEntry} from "../../entities/EventEntry";

@Component({
  templateUrl: "event.component.html"
})
export class EventComponent implements OnInit {

  event: EventEntry;

  constructor(private navParams: NavParams) {

  }

  ngOnInit(): void {
    this.event = this.navParams.data.parameter;
  }

}
