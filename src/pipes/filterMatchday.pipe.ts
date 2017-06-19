import {Pipe, PipeTransform} from "@angular/core";
import {Match} from "../entities/Match";

@Pipe({
  name: 'filterMatchday',
  pure: false
})
export class FilterMatchdayPipe implements PipeTransform {

  transform(value: Match[], args: number): Match[] {
    return value.filter(item => item.round_number == args);
  }

}
