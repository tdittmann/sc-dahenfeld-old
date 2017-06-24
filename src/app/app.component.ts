import {Component, ViewChild} from "@angular/core";
import {Nav, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {Push} from "@ionic/cloud-angular";
import {PushToken} from "@ionic/cloud/dist/es5";
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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any;

  /* NAVIGATION */
  vereinNavigation: NavigationItem[] = [
    {title: 'News', component: NewsListComponent, parameter: "", icon: "paper", active: true},
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
    {title: 'Jugend', component: YouthComponent, parameter: "", icon: "football", active: false},
  ];
  turnenTischtennisNavigation: NavigationItem[] = [
    {title: 'Turnen', component: NewsDetailComponent, parameter: "733", icon: "body", active: false},
    {title: 'Tischtennis', component: NewsDetailComponent, parameter: "755", icon: "walk", active: false},
  ];
  appNavigation: NavigationItem[] = [
    {title: 'Über die App', component: AboutComponent, parameter: "", icon: "information-circle", active: false}
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private push: Push, private storage: Storage, private http: Http) {
    platform.ready().then(() => {

      // Root Page
      this.rootPage = NewsListComponent;

      // Check if tour already showed
      this.storage.get("tour").then(
        (result) => {
          if (result != "1") {
            this.rootPage = TourComponent;
          }
        }
      );

      // Push Notifications
      this.registerPush();
      this.receivePushNotification();

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: NavigationItem) {
    this.resetPageActiveStates();

    page.active = true;
    this.nav.setRoot(page.component, {parameter: page.parameter});
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

  private registerPush() {
    this.push.register().then((t: PushToken) => {
      return this.push.saveToken(t);
    }).then((t: PushToken) => {
      this.saveToken(t.token);
      console.log('Token saved:', t.token);
    });
  }

  private receivePushNotification() {
    this.push.rx.notification().subscribe(
      (msg) => {
        // TODO
        alert(msg.title + ': ' + msg.text);
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

  private getOperationSystem(): string {
    if (navigator.userAgent.match(/Android/i)) {
      return "android";
    } else if (navigator.userAgent.match(/iPhone/i)) {
      return "ios";
    }
  }
}

