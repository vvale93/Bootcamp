import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Class } from './class';

import { ConfigService } from './config.service';


@Injectable()
export class ClassMatcherService {

  constructor(private http: Http, private config: ConfigService) { }

  getClasses() : Observable<Class[]> {
    return this.http.get(`${this.config.host}data/character/classes?${this.config.key}`)
      .map(function(data){
        return data.json().classes;
      });
  }
}
