import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from '../app/main-page/main-page.component';
import { RealmsStatusComponent } from './realms-status/realms-status.component';
import { Leaderboard2v2Component } from './leaderboard2v2/leaderboard2v2.component';
import { Leaderboard3v3Component } from './leaderboard3v3/leaderboard3v3.component';
import { LeaderboardrbgComponent } from './leaderboardrbg/leaderboardrbg.component'
import { CharDetailComponent } from './char-detail/char-detail.component';
import { GuildDetailComponent } from './guild-detail/guild-detail.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'realms-status', component: RealmsStatusComponent },
  { path: 'leaderboard2v2', component: Leaderboard2v2Component },
  { path: 'leaderboard3v3', component: Leaderboard3v3Component },
  { path: 'leaderboardRBG', component: LeaderboardrbgComponent },
  { path: 'character/:realm/:name', component: CharDetailComponent },
  { path: 'guild/:realm/:name', component: GuildDetailComponent },
  { path: '**', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }