import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Realm } from './realm';

import { ConfigService } from './config.service';



@Injectable()
export class RealmsStatusService {

  constructor(private http : Http, private config: ConfigService) { }
  getAll() : Observable<Realm[]> {
    return this.http.get(`${this.config.host}realm/status?${this.config.key}`)
      .map(function(data){
        return data.json().realms;
      });
  }
}
