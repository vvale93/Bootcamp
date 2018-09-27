import { Component, OnInit } from '@angular/core';

import { LeaderboardService } from '../leaderboard.service';

import { PvpUser } from '../pvp-user';

@Component({
  selector: 'app-leaderboard3v3',
  templateUrl: './leaderboard3v3.component.html',
  styleUrls: ['./leaderboard3v3.component.css']
})
export class Leaderboard3v3Component implements OnInit {

  users: PvpUser[];
  user: PvpUser;
  
  constructor(private LeaderboardService : LeaderboardService) { }

  ngOnInit() {
    this.LeaderboardService.getAll('3v3').subscribe(users => {
      this.users = users;
    });
  }
}
