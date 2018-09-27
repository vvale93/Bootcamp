import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Race } from './race';

import { ConfigService } from './config.service';


@Injectable()
export class RaceMatcherService {  

  constructor(private http: Http, private config: ConfigService) { }
  getRaces() : Observable<Race[]> {
    return this.http.get(`${this.config.host}data/character/races?${this.config.key}`)
      .map(function(data){
        return data.json().races;
      });
  }
}
