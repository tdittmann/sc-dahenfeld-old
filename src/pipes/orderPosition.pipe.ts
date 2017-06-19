import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "orderPosition",
  pure: false
})
export class OrderPositionPipe implements PipeTransform {

  transform(input, format) {

    if (!input) {
      return;
    }

    input.sort((a, b) => {
      // Order by position
      if (format.indexOf(a.position) < format.indexOf(b.position)) {
        return -1;
      }
      if (format.indexOf(a.position) > format.indexOf(b.position)) {
        return 1;
      }

      // Order by nachname
      if (a.nachname.toLowerCase() < b.nachname.toLowerCase()) {
        return -1;
      }
      if (a.nachname.toLowerCase() > b.nachname.toLowerCase()) {
        return 1;
      }

      return 0;
    });

    return input;
  }

}
