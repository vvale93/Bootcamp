import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Char } from './char';

import { ConfigService } from './config.service';

@Injectable()
export class SearchCharService {

  constructor(private http : Http, private config: ConfigService) { }
  getChar(charName:string, charRealm:string) : Observable<Char> {
    return this.http.get(`${this.config.host}character/${charRealm}/${charName}?${this.config.key}`)
      .map(function(data){
        return data.json();
      });
  }

}
