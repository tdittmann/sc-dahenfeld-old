import {Component, OnInit} from "@angular/core";
import {Match} from "../../entities/Match";
import {EventService} from "../../services/event.service";
import {ModalController} from "ionic-angular";
import {MatchDetailComponent} from "../matchDetail/matchDetail.component";

@Component({
  selector: "app-vereinskalender",
  templateUrl: "vereinskalender.component.html"
})
export class VereinskalenderComponent implements OnInit {

  matches: Match[] = [];
  currentDay: any;
  currentMonth: any;

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private eventService: EventService, private modalCtrl: ModalController) {

  }


  ngOnInit(): void {

    // Load all matches
    this.eventService.loadAllMatches().subscribe(
      (matches) => {
        this.matches = matches;
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

  openMatch(matchId: string) {
    let modal = this.modalCtrl.create(MatchDetailComponent, {params: matchId});
    modal.present();
  }

}
