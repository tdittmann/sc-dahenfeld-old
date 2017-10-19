import {DatePipe} from "@angular/common";
import {environment} from "../environments/environment";

export class EventEntry {

  title: string;
  image: string;
  start: string;
  end: string;
  text: string;

  getImageUrl(): string {
    if (this.image) {
      return environment.siteUrl + this.image;
    }

    return '';
  }

  getFormattedDate(): string {
    let datePipe: DatePipe = new DatePipe(environment.locale);

    if (parseInt(this.end) > 0) {
      return 'von ' + datePipe.transform(this.start, 'bb') + '. bis ' + datePipe.transform(this.end, 'longDate')
    }

    return 'am ' + datePipe.transform(this.start, 'longDate');
  }
}
