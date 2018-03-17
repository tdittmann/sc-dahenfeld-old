import {Component, Input} from "@angular/core";


@Component({
  selector: 'simple-navbar',
  templateUrl: 'simpleNavbar.component.html'
})
export class SimpleNavbarComponent {

  @Input('heading') heading: string;
  @Input('showMenu') showMenu: boolean = true;

  constructor() {

  }

}
