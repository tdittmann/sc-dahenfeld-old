import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, LOCALE_ID, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {IonicStorageModule} from "@ionic/storage";

import {MyApp} from "./app.component";
import {FirstImagePipe} from "../pipes/firstImage.pipe";
import {LimitHtmlText} from "../pipes/limitHtmlText.pipe";
import {ArticleService} from "../services/article.service";
import {ArticleDetailLeadImageComponent} from "../pages/articleDetail/leadImage/articleDetailLeadImage.component";
import {EventService} from "../services/event.service";
import {CalendarComponent} from "../pages/calendar/calendar.component";
import {AboutComponent} from "../pages/about/about.component";
import {TeamDetailComponent} from "../pages/teamDetail/teamDetail.component";
import {NgPipesModule} from "ngx-pipes";
import {FixturesComponent} from "../pages/fixtures/fixtures.component";
import {SocialSharing} from "@ionic-native/social-sharing";
import {RankingPageComponent} from "../pages/rankingPage/rankingPage.component";
import {Ng2FilterPipeModule} from "ng2-filter-pipe";
import {FilterMatchdayPipe} from "../pipes/filterMatchday.pipe";
import {TeamPlayersComponent} from "../pages/teamPlayers/teamPlayers.component";
import {OrderPositionPipe} from "../pipes/orderPosition.pipe";
import {TourComponent} from "../pages/tour/tour.component";
import {PlayerDetailComponent} from "../pages/playerDetail/playerDetail.component";
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
import {CardSimpleComponent} from "../components/cardSimple/cardSimple.component";
import {DatePipe} from "@angular/common";
import {environment} from "../environments/environment";
import {SimpleNavbarComponent} from "../components/simpleNavbar/simpleNavbar.component";
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {CardExtendedComponent} from "../components/cardExtended/cardExtended.component";
import {SimpleButtonComponent} from "../components/simpleButton/simpleButton.component";
import {ArticleDetailCardComponent} from "../pages/articleDetail/card/articleDetailCard.component";
import {ArticleMetadataComponent} from "../components/articleMetadata/articleMetadata.component";
import {RankingService} from "../services/ranking.service";
import {MatchOverviewComponent} from "../pages/fixtures/matchOverview/matchOverview.component";
import {ClubImageComponent} from "../components/clubImage/clubImage.component";
import {PlayerService} from "../services/player.service";
import {PlayerImageComponent} from "../components/playerImage/playerImage.component";
import {RankingComponent} from "../components/ranking/ranking.component";
import {PlayerInfoRowComponent} from "../components/playerInfoRow/playerInfoRow.component";
import {PlayerStatisticComponent} from "../components/playerStatistic/playerStatistic.component";
import {HttpClientModule} from "@angular/common/http";
import {GameReportComponent} from "../pages/gameReport/gameReport.component";
import {LineupComponent} from "../pages/lineup/lineup.component";
import {SeparatorComponent} from "../components/separator/separator.component";
import {JerseyComponent} from "../pages/lineup/jersey/jersey.component";
import {PlayerMatchEventsComponent} from "../pages/lineup/playerMatchEvents/playerMatchEvents.component";
import {MatchOverviewTabComponent} from "../pages/matchOverviewTab/matchOverviewTab.component";
import {CountdownComponent} from "../pages/fixtures/matchOverview/matchResult/countdown/countdown.component";
import {CountdownTimeComponent} from "../pages/fixtures/matchOverview/matchResult/countdown/countdownTime/countdownTime.component";
import {ToastService} from "../services/toast.service";
import {StorageService} from "../services/storage.service";
import {DevModeService} from "../services/devMode.service";
import {ProfileService} from "../services/profile.service";
import {ProfileComponent} from "../pages/profile/profile.component";
import {TeamStatisticsComponent} from "../pages/teamStatistics/teamStatistics.component";
import {PlayerStatsCardComponent} from "../components/playerStatsCard/playerStatsCard.component";
import {PlayerStatsListComponent} from "../components/playerStatsList/playerStatsList.component";
import {StatsDetailListComponent} from "../pages/statsDetailList/statsDetailList.component";
import {ModalToolbarComponent} from "../components/modalToolbar/modalToolbar.component";
import {MatchResultComponent} from "../pages/fixtures/matchOverview/matchResult/matchResult.component";
import {PageStateComponent} from "../components/pageState/pageState.component";
import {BlogComponent} from "../pages/blog/blog.component";

@NgModule({
  declarations: [
    MyApp,
    ArticleDetailLeadImageComponent,
    LimitHtmlText,
    CalendarComponent,
    AboutComponent,
    TeamDetailComponent,
    FixturesComponent,
    RankingComponent,
    TeamPlayersComponent,
    FilterMatchdayPipe,
    OrderPositionPipe,
    TourComponent,
    PlayerDetailComponent,
    MatchDetailComponent,
    YouthComponent,
    EventComponent,
    BirthdaysComponent,
    FrontPageComponent,
    LeadImageComponent,
    CardSimpleComponent,
    SimpleNavbarComponent,
    CardExtendedComponent,
    SimpleButtonComponent,
    ArticleDetailCardComponent,
    ArticleMetadataComponent,
    MatchOverviewComponent,
    ClubImageComponent,
    PlayerImageComponent,
    RankingComponent,
    PlayerInfoRowComponent,
    PlayerStatisticComponent,
    GameReportComponent,
    LineupComponent,
    SeparatorComponent,
    JerseyComponent,
    PlayerMatchEventsComponent,
    MatchOverviewTabComponent,
    CountdownComponent,
    CountdownTimeComponent,
    ProfileComponent,
    TeamStatisticsComponent,
    PlayerStatsCardComponent,
    PlayerStatsListComponent,
    StatsDetailListComponent,
    ModalToolbarComponent,
    RankingPageComponent,
    MatchResultComponent,
    PageStateComponent,
    BlogComponent,
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
    ArticleDetailLeadImageComponent,
    CalendarComponent,
    AboutComponent,
    TeamDetailComponent,
    FixturesComponent,
    TeamPlayersComponent,
    TourComponent,
    PlayerDetailComponent,
    MatchDetailComponent,
    YouthComponent,
    EventComponent,
    BirthdaysComponent,
    FrontPageComponent,
    ArticleDetailCardComponent,
    GameReportComponent,
    LineupComponent,
    MatchOverviewTabComponent,
    ProfileComponent,
    TeamStatisticsComponent,
    StatsDetailListComponent,
    RankingPageComponent,
    BlogComponent,
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
    ToastService,
    DevModeService,
    ProfileService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: environment.locale},
  ]
})
export class AppModule {
}
