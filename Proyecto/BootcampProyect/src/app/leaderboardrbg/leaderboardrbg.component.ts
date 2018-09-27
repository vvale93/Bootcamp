import { Component, OnInit } from '@angular/core';

import { LeaderboardService } from '../leaderboard.service';

import { PvpUser } from '../pvp-user';

@Component({
  selector: 'app-leaderboardrbg',
  templateUrl: './leaderboardrbg.component.html',
  styleUrls: ['./leaderboardrbg.component.css']
})
export class LeaderboardrbgComponent implements OnInit {

  users: PvpUser[];
  user: PvpUser;
  
  constructor(private LeaderboardService : LeaderboardService) { }

  ngOnInit() {
    this.LeaderboardService.getAll('rbg').subscribe(users => {
      this.users = users;
    });
  }
}
