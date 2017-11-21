import {environment} from "../environments/environment";
import {DatePipe} from "@angular/common";

export class EventEntry {

  title: string;
  image: string;
  start: string;
  end: string;
  text: string;

  public static getImageUrl(image: string): string {
    if (image) {
      return environment.siteUrl + image;
    }

    return '';
  }

  public static getFormattedDate(start: string, end: string): string {
    let datePipe: DatePipe = new DatePipe(environment.locale);

    if (parseInt(end) > 0) {
      return 'von ' + datePipe.transform(start, 'bb') + '. bis ' + datePipe.transform(end, 'longDate')
    }

    return 'am ' + datePipe.transform(start, 'longDate');
  }

}
