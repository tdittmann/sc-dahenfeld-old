import {Component, OnInit} from "@angular/core";
import {BirthdayService} from "../../services/birthday.service";
import {Birthday} from "../../entities/Birthday";
import {SocialSharingService} from "../../services/socialSharing.service";

@Component({
  selector: 'birthdays',
  templateUrl: "birthdays.component.html"
})
export class BirthdaysComponent implements OnInit {

  birthdayBackup: Birthday[] = [];
  birthdays: Birthday[] = [];

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private birthdayService: BirthdayService, private socialSharingService: SocialSharingService) {

  }

  ngOnInit(): void {
    this.birthdayService.loadAllBirthdays()
      .subscribe(
        (response) => {
          this.birthdayBackup = response;
          this.calculate(this.birthdayBackup);
          this.initializeBirthdays(this.birthdayBackup);
          this.isLoading = false;
        },
        (error) => {
          this.isError = true;
          this.isLoading = false;
          console.error(error);
        }
      );
  }

  filterName(ev: any) {
    // Reset items back to all of the items
    this.initializeBirthdays(this.birthdayBackup);

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.birthdays = this.birthdays.filter((item) => {
        let name: string = item.firstname + " " + item.lastname;
        return (name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  shareBirthday(pBirthday: Birthday) {
    if (pBirthday.daysUntilBirthday == 0) {
      this.socialSharingService.shareBirthday(pBirthday);
    }
  }

  private initializeBirthdays(birthdays: Birthday[]) {
    this.birthdays = birthdays;
  }

  /**
   * What a fucking calculation
   */
  private calculate(birthdays: Birthday[]) {
    birthdays.forEach(pBirthday => {
      let day: Date = new Date(pBirthday.date);
      let today: Date = new Date();

      let ageDifMs = Date.now() - day.getTime();
      let ageDate = new Date(ageDifMs); // miliseconds from epoch
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

}
