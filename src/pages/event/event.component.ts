import {Component, OnInit} from "@angular/core";
import {NavParams} from "ionic-angular";
import {EventEntry} from "../../entities/EventEntry";

@Component({
  selector: 'event',
  templateUrl: "event.component.html"
})
export class EventComponent implements OnInit {

  event: EventEntry;

  constructor(private navParams: NavParams) {

  }

  ngOnInit(): void {
    this.event = this.navParams.data.parameter;
  }

  getImageUrl(image: string): string {
    return EventEntry.getImageUrl(image);
  }

  getFormattedDate(start: string, end: string): string {
    return EventEntry.getFormattedDate(start, end);
  }

}
