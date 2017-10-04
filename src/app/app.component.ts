import {Component, ViewChild} from "@angular/core";
import {Nav, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {NavigationItem} from "../entities/NavigationItem";
import {NewsListComponent} from "../pages/newsList/newsList.component";
import {VereinskalenderComponent} from "../pages/vereinskalender/vereinskalender.component";
import {AboutComponent} from "../pages/about/about.component";
import {NewsDetailComponent} from "../pages/newsDetail/newsDetail.component";
import {TeamDetailComponent} from "../pages/teamDetail/teamDetail.component";
import {Mannschaftsart} from "../entities/Mannschaftsart";
import {Storage} from "@ionic/storage";
import {TourComponent} from "../pages/tour/tour.component";
import {Http} from "@angular/http";
import {environment} from "../environments/environment";
import {YouthComponent} from "../pages/youth/youth.component";
import {Push, PushObject, PushOptions} from "@ionic-native/push";
import {BirthdaysComponent} from "../pages/birthdays/birthdays.component";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = NewsListComponent;

  /* NAVIGATION */
  vereinNavigation: NavigationItem[] = [
    {title: 'News', component: NewsListComponent, parameter: "", heading: "News", icon: "paper", active: true},
    {title: 'Chronik', component: NewsListComponent, parameter: "155", heading: "Chronik", icon: "time", active: false},
    {title: 'Vereinskalender', component: VereinskalenderComponent, parameter: "", icon: "calendar", active: false},
    {title: 'Sportheim', component: NewsDetailComponent, parameter: "830", icon: "restaurant", active: false},
  ];
  fussballNavigation: NavigationItem[] = [
    {
      title: '1. Mannschaft',
      component: TeamDetailComponent,
      parameter: Mannschaftsart.ERSTE_MANNSCHAFT,
      icon: "football",
      active: false
    },
    {
      title: '2. Mannschaft',
      component: TeamDetailComponent,
      parameter: Mannschaftsart.ZWEITE_MANNSCHAFT,
      icon: "football",
      active: false
    },
    {
      title: 'Alte Herren',
      component: NewsListComponent,
      parameter: "109",
      heading: "Alte Herren",
      icon: "football",
      active: false
    },
    {title: 'Jugend', component: YouthComponent, parameter: "", icon: "football", active: false},
  ];
  turnenTischtennisNavigation: NavigationItem[] = [
    {title: 'Turnen', component: NewsDetailComponent, parameter: "733", icon: "body", active: false},
    {title: 'Tischtennis', component: NewsDetailComponent, parameter: "755", icon: "walk", active: false},
  ];
  developmentNavigation: NavigationItem[] = [
    {title: 'Geburtstage', component: BirthdaysComponent, parameter: "", icon: "time", active: false},
  ];
  appNavigation: NavigationItem[] = [
    {title: 'Über die App', component: AboutComponent, parameter: "", icon: "information-circle", active: false}
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private push: Push, private storage: Storage, private http: Http) {
    platform.ready().then(() => {

      // Check if tour already showed
      this.storage.get("tour").then(
        (result) => {
          if (result != "1") {
            this.rootPage = TourComponent;
          }
        }
      );

      // Push Notifications
      this.handlePush();

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: NavigationItem) {
    this.resetPageActiveStates();

    page.active = true;
    this.nav.setRoot(page.component, {parameter: page.parameter, heading: page.heading});
  }

  private resetPageActiveStates() {
    this.resetPageActiveState(this.vereinNavigation);
    this.resetPageActiveState(this.fussballNavigation);
    this.resetPageActiveState(this.turnenTischtennisNavigation);
    this.resetPageActiveState(this.appNavigation);
  }

  private resetPageActiveState(navigationItems: NavigationItem[]) {
    for (let navigationItem of navigationItems) {
      navigationItem.active = false;
    }
  }

  private handlePush() {

    // Init the push service
    const pushOptions: PushOptions = {
      android: {
        "forceShow": "true"
      },
      ios: {
        alert: "true",
        badge: "true",
        sound: "true"
      },
      windows: {}
    };

    const pushObject: PushObject = this.push.init(pushOptions);

    // Registration
    pushObject.on('registration').subscribe(
      (registration: any) => {
        this.saveToken(registration.registrationId);
        console.log('Token saved:', registration.registrationId);
      });

    // Notification
    pushObject.on('notification').subscribe(
      (notification: any) => {
        console.log('Received a notification', notification);

        if (notification.additionalData.page == "newsDetail") {
          this.nav.setRoot(NewsDetailComponent, {parameter: notification.additionalData.id});
        } else if (notification.additionalData.page == "vereinskalender") {
          this.nav.setRoot(VereinskalenderComponent);
        } else {
          this.nav.setRoot(NewsListComponent);
        }
      });
  }

  private saveToken(token: string) {
    let os: string = this.getOperationSystem();

    this.http.get(environment.backendUrl + "settings?registrationId=" + token + "&os=" + os)
      .subscribe(
        (result) => {
          console.log("Registration: " + result);
        }
      );
  }

  // We only provide android and ios, so if no android device it is automatically an ios-device.
  private getOperationSystem(): string {
    if (navigator.userAgent.match(/Android/i)) {
      return "android";
    }

    return "ios";
  }
}

