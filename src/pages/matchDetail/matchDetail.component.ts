import {Component, OnInit} from "@angular/core";
import {NavParams} from "ionic-angular";
import {GameReportComponent} from "../gameReport/gameReport.component";
import {LineupComponent} from "../lineup/lineup.component";
import {MatchOverviewTabComponent} from "../matchOverviewTab/matchOverviewTab.component";

@Component({
  selector: 'match-detail',
  templateUrl: "matchDetail.component.html"
})
export class MatchDetailComponent implements OnInit {

  matchId: string;

  overviewTab: any = MatchOverviewTabComponent;
  lineupTab: any = LineupComponent;
  gameReportTab: any = GameReportComponent;

  constructor(private navParams: NavParams) {

  }

  ngOnInit(): void {
    this.matchId = this.navParams.data.params;
  }

}
