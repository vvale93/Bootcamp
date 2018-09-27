import { Component, OnInit } from '@angular/core';

import { LeaderboardService } from '../leaderboard.service';

import { PvpUser } from '../pvp-user';

@Component({
  selector: 'app-pvp-aside',
  templateUrl: './pvp-aside.component.html',
  styleUrls: ['./pvp-aside.component.css']
})
export class PvpAsideComponent implements OnInit {

  users2v2: PvpUser[];
  user2v2: PvpUser;
  users3v3: PvpUser[];
  user3v3: PvpUser;
  users5v5: PvpUser[];
  user5v5: PvpUser;
  usersRBG: PvpUser[];
  userRBG: PvpUser;

  constructor(private LeaderboardService: LeaderboardService) { }

  ngOnInit() {
    this.LeaderboardService.getAll('2v2').subscribe(users2v2 => {
      this.users2v2 = users2v2;
    });

    this.LeaderboardService.getAll('3v3').subscribe(users3v3 => {
      this.users3v3 = users3v3;
    });

    this.LeaderboardService.getAll('rbg').subscribe(usersRBG => {
      this.usersRBG = usersRBG;
    });    
  }

}
