import {Component, OnInit} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {GameReportComponent} from "../gameReport/gameReport.component";
import {LineupComponent} from "../lineup/lineup.component";

@Component({
  templateUrl: "matchDetail.component.html"
})
export class MatchDetailComponent implements OnInit {

  matchId: string;

  overviewTab: any;
  lineupTab: any = LineupComponent;
  gameReportTab: any = GameReportComponent;

  constructor(private navParams: NavParams, private viewCtrl: ViewController) {

  }

  ngOnInit(): void {
    this.matchId = this.navParams.data.params;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
