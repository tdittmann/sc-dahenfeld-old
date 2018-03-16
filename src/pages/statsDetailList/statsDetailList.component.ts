import {Component, OnInit} from "@angular/core";
import {StatsPlayer} from "../../entities/StatsPlayer";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'stats-detail-list',
  templateUrl: 'statsDetailList.component.html'
})
export class StatsDetailListComponent implements OnInit {

  players: StatsPlayer[] = [];
  title: string = "Statistiken";
  colIcon1: string = "";
  colIcon2: string = "";
  colIcon3: string = "";
  showCol2: boolean = false;
  showCol3: boolean = false;

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private navParams: NavParams) {

  }

  ngOnInit(): void {
    this.players = this.navParams.data.players;
    this.title = this.navParams.data.title;
    this.colIcon1 = this.navParams.data.colIcon1;
    this.colIcon2 = this.navParams.data.colIcon2;
    this.colIcon3 = this.navParams.data.colIcon3;
    this.showCol2 = this.navParams.data.showCol2;
    this.showCol3 = this.navParams.data.showCol3;

    this.isLoading = false;
  }

}
