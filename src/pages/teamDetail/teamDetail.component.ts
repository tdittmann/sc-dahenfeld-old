import {Component, OnInit} from "@angular/core";
import {SoccerService} from "../../services/soccer.service";
import {NavParams} from "ionic-angular";
import {Soccer} from "../../entities/Soccer";
import {Mannschaftsart} from "../../entities/Mannschaftsart";
import {SpielplanComponent} from "../spielplan/spielplan.component";
import {TableComponent} from "../table/table.component";
import {TeamPlayersComponent} from "../teamPlayers/teamPlayers.component";

@Component({
  selector: "teamDetail",
  templateUrl: "teamDetail.component.html"
})
export class TeamDetailComponent implements OnInit {

  soccer: Soccer;
  team: Mannschaftsart;

  tableTab: any = TableComponent;
  fixturesTab: any = SpielplanComponent;
  teamTab: any = TeamPlayersComponent;
  // statsTab

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private soccerService: SoccerService, private navParams: NavParams) {

  }

  ngOnInit(): void {
    this.team = this.navParams.data.parameter;

    this.soccerService.loadTeamData(this.team).then(
      (soccerModel: Soccer) => {
        this.soccer = soccerModel;

        this.isLoading = false;
        this.isError = this.soccer.isError;
      });

  }

}
