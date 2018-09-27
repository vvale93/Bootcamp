import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { PvpUser } from './pvp-user';

import { ConfigService } from './config.service';


@Injectable()
export class LeaderboardService {

  constructor(private http : Http, private config: ConfigService) { }

  getAll(pvpMode:string) : Observable<PvpUser[]> {
    return this.http.get(`${this.config.host}leaderboard/${pvpMode}?${this.config.key}`)
      .map(function(data){
        return data.json().rows;
      });
  }
}
