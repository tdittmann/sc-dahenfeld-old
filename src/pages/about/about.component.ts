import {Component, OnInit} from "@angular/core";

@Component({
  templateUrl: "about.component.html"
})
export class AboutComponent implements OnInit {

  version: any = "3.0.0";

  constructor() {

  }

  ngOnInit(): void {
  }

}
