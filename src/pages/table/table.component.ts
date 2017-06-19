import {Component, OnInit} from "@angular/core";
import {SoccerService} from "../../services/soccer.service";
import {SoccerUtils} from "../../utils/SoccerUtils";

@Component({
  templateUrl: "table.component.html"
})
export class TableComponent implements OnInit {

  favTeam: string = SoccerUtils.TEAM_NAME;

  constructor(public soccerService: SoccerService) {

  }

  ngOnInit(): void {

  }


}
