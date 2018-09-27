import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  movies : Movie[];

  constructor(private http : Http) { }
  
  getAll() : Observable<Movie[]> {
    return this.http.get('../assets/movies.json')
    .map(function(data){
      return data.json();
    });
  }

  getOneMovie(id : number) : Observable<Movie> {
    return this.http.get('../assets/movies.json')
    .map(function(data){
      data = data.json();
      id = id - 1;
      return data[id];
    });
  }

}
