import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, LOCALE_ID, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {IonicStorageModule} from "@ionic/storage";

import {MyApp} from "./app.component";
import {OldiesComponent} from "../pages/oldies/oldies.component";
import {FirstImagePipe} from "../pipes/firstImage.pipe";
import {LimitHtmlText} from "../pipes/limitHtmlText.pipe";
import {ArticleService} from "../services/article.service";
import {ArticleDetailLeadImageComponent} from "../pages/articleDetail/leadImage/articleDetailLeadImage.component";
import {RemoveFirstImagePipe} from "../pipes/removeFirstImage.pipe";
import {EventService} from "../services/event.service";
import {CalendarComponent} from "../pages/calendar/calendar.component";
import {AboutComponent} from "../pages/about/about.component";
import {LoadingComponent} from "../pages/loading/loading.component";
import {ErrorComponent} from "../pages/error/error.component";
import {TeamDetailComponent} from "../pages/teamDetail/teamDetail.component";
import {NgPipesModule} from "ngx-pipes";
import {FixturesComponent} from "../pages/fixtures/fixtures.component";
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
import {BirthdaysComponent} from "../pages/birthdays/birthdays.component";
import {BirthdayService} from "../services/birthday.service";
import {SuperTabsModule} from "ionic2-super-tabs";
import {FrontPageComponent} from "../pages/frontPage/frontPage.component";
import {LeadImageComponent} from "../components/leadimage/leadimage.component";
import {SmallCardComponent} from "../components/smallCard/smallCard.component";
import {DatePipe} from "@angular/common";
import {environment} from "../environments/environment";
import {ScdNavbarComponent} from "../components/scdNavbar/scdNavbar.component";
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {BigCardComponent} from "../components/bigCard/bigCard.component";
import {ShareButtonComponent} from "../components/shareButton/shareButton.component";
import {ArticleDetailCardComponent} from "../pages/articleDetail/card/articleDetailCard.component";
import {ArticleInformationComponent} from "../components/articleInformation/articleInformation.component";
import {ChronicleComponent} from "../pages/chronicle/chronicle.component";
import {RankingService} from "../services/ranking.service";
import {MatchOverviewComponent} from "../components/matchOverview/matchOverview.component";
import {ClubImageComponent} from "../components/clubImage/clubImage.component";
import {PlayerService} from "../services/player.service";
import {PlayerImageComponent} from "../components/playerImage/playerImage.component";
import {RankingComponent} from "../components/ranking/ranking.component";
import {NoContentComponent} from "../components/noContent/noContent.component";
import {PlayerInfoRowComponent} from "../components/playerInfoRow/playerInfoRow.component";
import {PlayerStatisticComponent} from "../components/playerStatistic/playerStatistic.component";
import {HttpClientModule} from "@angular/common/http";
import {GameReportComponent} from "../pages/gameReport/gameReport.component";
import {LineupComponent} from "../pages/lineup/lineup.component";
import {SeparatorComponent} from "../components/separator/separator.component";
import {JerseyComponent} from "../components/jersey/jersey.component";
import {MatchEventsComponent} from "../components/matchEvents/matchEvents.component";
import {MatchOverviewTabComponent} from "../pages/matchOverviewTab/matchOverviewTab.component";
import {CountdownComponent} from "../components/countdown/countdown.component";
import {CountdownTimeComponent} from "../components/countdownTime/countdownTime.component";

@NgModule({
  declarations: [
    MyApp,
    OldiesComponent,
    ArticleDetailLeadImageComponent,
    FirstImagePipe,
    LimitHtmlText,
    RemoveFirstImagePipe,
    CalendarComponent,
    AboutComponent,
    LoadingComponent,
    ErrorComponent,
    TeamDetailComponent,
    FixturesComponent,
    TableComponent,
    TeamPlayersComponent,
    FilterMatchdayPipe,
    OrderPositionPipe,
    TourComponent,
    PlayerComponent,
    MatchDetailComponent,
    YouthComponent,
    EventComponent,
    BirthdaysComponent,
    FrontPageComponent,
    LeadImageComponent,
    SmallCardComponent,
    ScdNavbarComponent,
    BigCardComponent,
    ShareButtonComponent,
    ArticleDetailCardComponent,
    ArticleInformationComponent,
    ChronicleComponent,
    MatchOverviewComponent,
    ClubImageComponent,
    PlayerImageComponent,
    RankingComponent,
    NoContentComponent,
    PlayerInfoRowComponent,
    PlayerStatisticComponent,
    GameReportComponent,
    LineupComponent,
    SeparatorComponent,
    JerseyComponent,
    MatchEventsComponent,
    MatchOverviewTabComponent,
    CountdownComponent,
    CountdownTimeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgPipesModule,
    Ng2FilterPipeModule,
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      activator: 'ripple',
      backButtonText: '',
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OldiesComponent,
    ArticleDetailLeadImageComponent,
    CalendarComponent,
    AboutComponent,
    TeamDetailComponent,
    FixturesComponent,
    TableComponent,
    TeamPlayersComponent,
    TourComponent,
    PlayerComponent,
    MatchDetailComponent,
    YouthComponent,
    EventComponent,
    BirthdaysComponent,
    FrontPageComponent,
    ArticleDetailCardComponent,
    ChronicleComponent,
    GameReportComponent,
    LineupComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ArticleService,
    EventService,
    MatchService,
    BirthdayService,
    SocialSharing,
    SocialSharingService,
    FilterMatchdayPipe,
    OrderPositionPipe,
    Push,
    DatePipe,
    PhotoViewer,
    RankingService,
    PlayerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: environment.locale},
  ]
})
export class AppModule {
}
