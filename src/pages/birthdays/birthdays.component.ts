import {Component, OnInit} from "@angular/core";
import {BirthdayService} from "../../services/birthday.service";
import {Birthday} from "../../entities/Birthday";
import {SocialSharingService} from "../../services/socialSharing.service";

@Component({
  templateUrl: "birthdays.component.html"
})
export class BirthdaysComponent implements OnInit {

  birthdays: Birthday[] = [];

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private birthdayService: BirthdayService, private socialSharingService: SocialSharingService) {

  }

  ngOnInit(): void {
    this.birthdayService.loadAllBirthdays()
      .subscribe(
        (response) => {
          this.birthdays = response;
          this.calculate(this.birthdays);
          this.isLoading = false;
        },
        (error) => {
          console.error(error);
          this.isError = true;
          this.isLoading = false;
        }
      )
  }

  /**
   * What a fucking calculation
   */
  private calculate(birthdays: Birthday[]) {
    birthdays.forEach(pBirthday => {
      let day: Date = new Date(pBirthday.date);
      let today: Date = new Date();

      var ageDifMs = Date.now() - day.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      pBirthday.age = Math.abs(ageDate.getUTCFullYear() - 1970);

      //Set current year or the next year if you already had birthday this year
      day.setFullYear(today.getFullYear());
      if (today.getTime() > day.getTime()) {
        day.setFullYear(today.getFullYear() + 1);
        pBirthday.age++;
      }

      //Calculate difference between days
      pBirthday.daysUntilBirthday = Math.floor((day.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      if (pBirthday.daysUntilBirthday == 365) {
        pBirthday.daysUntilBirthday = 0;
        pBirthday.age--;
      }
    })
  }

  shareBirthday(pBirthday: Birthday) {
    if (pBirthday.daysUntilBirthday == 0) {
      this.socialSharingService.shareBirthday(pBirthday);
    }
  }

}
