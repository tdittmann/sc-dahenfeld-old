import {Component, OnInit} from "@angular/core";
import {NavParams} from "ionic-angular";
import {MatchService} from "../../services/match.service";
import {Match} from "../../entities/Match";
import {MatchEvent} from "../../entities/MatchEvent";

@Component({
  selector: 'match-overview-tab',
  templateUrl: 'matchOverviewTab.component.html'
})
export class MatchOverviewTabComponent implements OnInit {

  match: Match;
  events: MatchEvent[];

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private navParams: NavParams, private matchService: MatchService) {

  }

  ngOnInit(): void {
    let matchId = this.navParams.data.id;

    this.matchService.loadMatchOverview(matchId).subscribe(
      (matchOverview) => {
        this.match = matchOverview.match;
        this.events = matchOverview.events.sort(function (a, b) {
          return a.time - b.time;
        });
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.isError = true;
        console.error(error);
      }
    );
  }

  getCssClass(clubId: number): string {
    if (this.match.home_id == clubId) {
      return "homeTeam";
    } else {
      return "awayTeam";
    }
  }

  getImageForEvent(event: string) {
    if (event == "tor") {
      return "assets/img/icons/goal.png";
    } else if (event == "gelbe-karte") {
      return "assets/img/icons/yellowCard.png";
    } else if (event == "gelb-rote-karte") {
      return "assets/img/icons/yellowRedCard.png";
    } else if (event == "rote-karte") {
      return "assets/img/icons/redCard.png";
    }

    return "";
  }

}
