import {Component, OnInit} from "@angular/core";
import {SoccerUtils} from "../../utils/SoccerUtils";
import {NavParams} from "ionic-angular";
import {Mannschaftsart} from "../../entities/Mannschaftsart";
import {RankingService} from "../../services/ranking.service";
import {RankingTeam} from "../../entities/RankingTeam";

@Component({
  selector: 'ranking',
  templateUrl: "table.component.html"
})
export class TableComponent implements OnInit {

  ranking: RankingTeam[];
  team: Mannschaftsart;
  favTeam: string = SoccerUtils.TEAM_NAME;

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private navParams: NavParams, private rankingService: RankingService) {

  }

  ngOnInit(): void {
    this.team = this.navParams.data.id;

    this.rankingService.loadRanking(this.team).subscribe(
      (response) => {
        this.ranking = response;
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
        this.isError = true;
      }
    );
  }


}
