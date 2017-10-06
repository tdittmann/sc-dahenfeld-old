import {Component, OnInit} from "@angular/core";

@Component({
  templateUrl: "about.component.html"
})
export class AboutComponent implements OnInit {

  version: string = "3.2.0";
  developer: string = "Timo Dittmann";

  constructor() {

  }

  ngOnInit(): void {
  }

}
