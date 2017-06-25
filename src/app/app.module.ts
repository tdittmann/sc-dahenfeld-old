import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, LOCALE_ID, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {IonicStorageModule} from "@ionic/storage";

import {MyApp} from "./app.component";
import {NewsListComponent} from "../pages/newsList/newsList.component";
import {FirstImagePipe} from "../pipes/firstImage.pipe";
import {LimitHtmlText} from "../pipes/limitHtmlText.pipe";
import {NewsService} from "../services/news.service";
import {HttpModule} from "@angular/http";
import {NewsDetailComponent} from "../pages/newsDetail/newsDetail.component";
import {RemoveFirstImagePipe} from "../pipes/removeFirstImage.pipe";
import {EventService} from "../services/event.service";
import {VereinskalenderComponent} from "../pages/vereinskalender/vereinskalender.component";
import {AboutComponent} from "../pages/about/about.component";
import {LoadingComponent} from "../pages/loading/loading.component";
import {ErrorComponent} from "../pages/error/error.component";
import {TeamDetailComponent} from "../pages/teamDetail/teamDetail.component";
import {SoccerService} from "../services/soccer.service";
import {NgPipesModule} from "ngx-pipes";
import {SpielplanComponent} from "../pages/spielplan/spielplan.component";
import {SocialSharing} from "@ionic-native/social-sharing";
import {TableComponent} from "../pages/table/table.component";
import {Ng2FilterPipeModule} from "ng2-filter-pipe";
import {FilterMatchdayPipe} from "../pipes/filterMatchday.pipe";
import {TeamPlayersComponent} from "../pages/teamPlayers/teamPlayers.component";
import {OrderPositionPipe} from "../pipes/orderPosition.pipe";
import {TourComponent} from "../pages/tour/tour.component";
import {PlayerComponent} from "../pages/player/player.component";
import {MatchService} from "../services/match.service";
import {MatchDetailComponent} from "../pages/matchDetail/matchDetail.component";
import {SocialSharingService} from "../services/socialSharing.service";
import {YouthComponent} from "../pages/youth/youth.component";
import {EventComponent} from "../pages/event/event.component";
import {Push} from "@ionic-native/push";

@NgModule({
  declarations: [
    MyApp,
    NewsListComponent,
    NewsDetailComponent,
    FirstImagePipe,
    LimitHtmlText,
    RemoveFirstImagePipe,
    VereinskalenderComponent,
    AboutComponent,
    LoadingComponent,
    ErrorComponent,
    TeamDetailComponent,
    SpielplanComponent,
    TableComponent,
    TeamPlayersComponent,
    FilterMatchdayPipe,
    OrderPositionPipe,
    TourComponent,
    PlayerComponent,
    MatchDetailComponent,
    YouthComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgPipesModule,
    Ng2FilterPipeModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Zurück',
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsListComponent,
    NewsDetailComponent,
    VereinskalenderComponent,
    AboutComponent,
    LoadingComponent,
    ErrorComponent,
    TeamDetailComponent,
    SpielplanComponent,
    TableComponent,
    TeamPlayersComponent,
    TourComponent,
    PlayerComponent,
    MatchDetailComponent,
    YouthComponent,
    EventComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NewsService,
    EventService,
    SoccerService,
    MatchService,
    SocialSharing,
    SocialSharingService,
    FilterMatchdayPipe,
    OrderPositionPipe,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: "de-DE"},
  ]
})
export class AppModule {
}
