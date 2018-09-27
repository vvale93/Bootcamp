import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { NgxPaginationModule } from 'ngx-pagination'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PvpAsideComponent } from './pvp-aside/pvp-aside.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchsComponent } from './searchs/searchs.component';
import { Leaderboard2v2Component } from './leaderboard2v2/leaderboard2v2.component';
import { Leaderboard3v3Component } from './leaderboard3v3/leaderboard3v3.component';
import { LeaderboardrbgComponent } from './leaderboardrbg/leaderboardrbg.component';
import { RealmsStatusComponent } from './realms-status/realms-status.component';
import { CharDetailComponent } from './char-detail/char-detail.component';
import { GuildDetailComponent } from './guild-detail/guild-detail.component';

import { LeaderboardService } from './leaderboard.service';
import { RealmsStatusService } from './realms-status.service';
import { SearchCharService } from './search-char.service';
import { RaceMatcherService } from './race-matcher.service';
import { ClassMatcherService } from './class-matcher.service';
import { GuildService } from './guild.service';
import { UserInfoService } from './user-info.service';
import { ConfigService } from './config.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PvpAsideComponent,
    MainPageComponent,
    SearchsComponent,
    RealmsStatusComponent,
    Leaderboard2v2Component,
    Leaderboard3v3Component,
    LeaderboardrbgComponent,
    CharDetailComponent,
    GuildDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    LeaderboardService,
    RealmsStatusService,
    SearchCharService,
    GuildService,
    RaceMatcherService,
    ClassMatcherService,
    UserInfoService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
