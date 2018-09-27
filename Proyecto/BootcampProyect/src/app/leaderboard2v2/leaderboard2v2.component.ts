import { Component, OnInit } from '@angular/core';

import { LeaderboardService } from '../leaderboard.service';

import { PvpUser } from '../pvp-user';

@Component({
  selector: 'app-leaderboard2v2',
  templateUrl: './leaderboard2v2.component.html',
  styleUrls: ['./leaderboard2v2.component.css']
})
export class Leaderboard2v2Component implements OnInit {

  users: PvpUser[];
  user: PvpUser;
  
  constructor(private LeaderboardService : LeaderboardService) { }

  ngOnInit() {
    this.LeaderboardService.getAll('2v2').subscribe(users => {
      this.users = users;
    });
  }
}
