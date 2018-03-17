import {Content, Navbar} from "ionic-angular";

export class NavbarUtils {

  public static changeNavbarColor(content: Content, navbar: Navbar): void {
    let sliderHeight = content.getContentDimensions().contentHeight * 0.60;

    if (content.getContentDimensions().scrollTop > sliderHeight) {
      navbar.setElementClass('navBar-color-onScroll', true);
    } else {
      navbar.setElementClass('navBar-color-onScroll', false);
    }
  }

}
