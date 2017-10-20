import {Component, Input} from "@angular/core";

@Component({
  selector: 'scd-navbar',
  templateUrl: 'scdNavbar.component.html'
})
export class ScdNavbarComponent {

  @Input('heading') heading: string;
  @Input('showMenu') showMenu: boolean = true;

  constructor() {

  }

}
