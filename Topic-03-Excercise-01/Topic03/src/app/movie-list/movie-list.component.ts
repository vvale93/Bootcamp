import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movie : Movie;
  movieList : Movie[];

  constructor(private MovieService : MovieService) { }

  ngOnInit() {
    this.MovieService.getAll().subscribe(movieList => {
      this.movieList = movieList;
    });
  }
  deleteMovie(i){
    this.movieList.splice(i,1);
  }
  addMovie(newTitle:string, newYear:string, newDirector:string) {
    
    if(!newTitle || !newYear || !newDirector){
      alert('Please, complete all fields');
    }else{
      let newId = this.movieList.length;
      let year = parseInt(newYear);
      let newMovie: Movie = {
        'title': newTitle,
        'year': year,
        'director': newDirector,
        'id':  newId
      }
      this.movieList.push(newMovie);
    }    
  }
}
