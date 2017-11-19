import {Component, OnInit} from "@angular/core";
import {EventService} from "../../services/event.service";
import {Calendar} from "../../entities/Calendar";
import {DatePipe} from "@angular/common";
import {environment} from "../../environments/environment";

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
        this.calendarEvents = calendarEvents.sort(function (a, b) {
          return (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0);
        });

        this.isLoading = false;
      },
      (error) => {
        this.isError = true;
        this.isLoading = false;
        console.error(error);
      }
    );

  }

  checkHeader(timestamp: number) {
    let d = new Date(timestamp);
    let day = d.getDate();
    let month = d.getMonth();

    let showHeader = (month != this.currentMonth || day != this.currentDay);

    this.currentDay = day;
    this.currentMonth = month;

    return showHeader;
  }

  getCalendarEventDate(date: string): string {
    let datePipe: DatePipe = new DatePipe(environment.locale);

    let formattedDate: string = datePipe.transform(date, 'HH:mm');
    if (formattedDate != '00:00') {
      return formattedDate;
    }

    return "";
  }

}
