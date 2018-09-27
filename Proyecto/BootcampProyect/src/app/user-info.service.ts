import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { PvpInfoUser } from './pvp-info-user';
import { UserGuildInfo } from './user-guild-info';
import { CharStats } from './char-stats';
import { UserItems } from './user-items'

import { ConfigService } from './config.service';

@Injectable()
export class UserInfoService {

  constructor(private http : Http, private config: ConfigService) { }

  getInfoPvp(charName: string, charRealm: string) : Observable<PvpInfoUser> {
    return this.http.get(`${this.config.host}character/${charRealm}/${charName}?fields=pvp&${this.config.key}`)
      .map(function(data){
        return data.json();
      });
  }
  getInfoGuild(charName: string, charRealm: string) : Observable<UserGuildInfo> {
    return this.http.get(`${this.config.host}character/${charRealm}/${charName}?fields=guild&${this.config.key}`)
      .map(function(data){
        return data.json();
      });
  }
  getInfoStats(charName: string, charRealm: string) : Observable<CharStats> {
    return this.http.get(`${this.config.host}character/${charRealm}/${charName}?fields=stats&${this.config.key}`)
      .map(function(data){
        return data.json();
      });
  }
  getInfoItems(charName: string, charRealm: string) : Observable<UserItems> {
    return this.http.get(`${this.config.host}character/${charRealm}/${charName}?fields=items&${this.config.key}`)
      .map(function(data){
        return data.json();
      });
  }

}
