import {Component, OnInit} from "@angular/core";
import {EventService} from "../../services/event.service";
import {Calendar} from "../../entities/Calendar";

@Component({
  selector: "calendar",
  templateUrl: "calendar.component.html"
})
export class CalendarComponent implements OnInit {

  calendarEvents: Calendar[] = [];
  currentDay: any;
  currentMonth: any;

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private eventService: EventService) {

  }


  ngOnInit(): void {
    this.eventService.loadCalendarEvents().subscribe(
      (calendarEvents) => {
        this.calendarEvents = calendarEvents;
        this.isLoading = false;
      },
      (error) => {
        this.isError = true;
        this.isLoading = false;
        console.error(error);
      }
    );

  }

  checkHeader(matchTimestamp: number) {
    let d = new Date(matchTimestamp);
    let day = d.getDate();
    let month = d.getMonth();

    let showHeader = (month != this.currentMonth || day != this.currentDay);

    this.currentDay = day;
    this.currentMonth = month;

    return showHeader;
  }

}
