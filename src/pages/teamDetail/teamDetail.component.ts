import {Component, OnInit} from "@angular/core";
import {NavParams} from "ionic-angular";
import {Mannschaftsart} from "../../entities/Mannschaftsart";
import {FixturesComponent} from "../fixtures/fixtures.component";
import {TableComponent} from "../table/table.component";
import {TeamPlayersComponent} from "../teamPlayers/teamPlayers.component";
import {TeamStatisticsComponent} from "../teamStatistics/teamStatistics.component";

@Component({
  selector: "team-detail",
  templateUrl: "teamDetail.component.html"
})
export class TeamDetailComponent implements OnInit {

  team: Mannschaftsart;

  tableTab: any = TableComponent;
  fixturesTab: any = FixturesComponent;
  teamTab: any = TeamPlayersComponent;
  statsTab: any = TeamStatisticsComponent;

  constructor(private navParams: NavParams) {

  }

  ngOnInit(): void {
    this.team = this.navParams.data.parameter;
  }

}
