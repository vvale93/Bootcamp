import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Guild } from './guild';

import { ConfigService } from './config.service';


@Injectable()
export class GuildService {

  constructor(private http : Http, private config: ConfigService) { }
  
  getGuild(guildName:string, guildRealm:string) : Observable<Guild> {
    guildName =  encodeURI(guildName);
    return this.http.get(`${this.config.host}guild/${guildRealm}/${guildName}?fields=members&${this.config.key}`)
      .map(function(data){
        return data.json();
      });
  }
}
