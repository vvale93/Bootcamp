import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-eachmovie',
  templateUrl: './eachmovie.component.html',
  styleUrls: ['./eachmovie.component.css']
})
export class EachmovieComponent implements OnInit {

  movie : Movie;
  constructor(private route : ActivatedRoute, private service : MovieService) { }
  private getMovie(id: number) {
    this.service.getOneMovie(id).subscribe((movie) => {
      this.movie = movie;
    }, (error) => {
        console.error(error);
      }
    )};
  

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.getMovie(id);
    })
  }
  edit(toChange: string, toEdit: string){
    let aux = document.getElementById(toEdit).innerText;
    if(aux=='Edit'){
      document.getElementById(toChange).style.display = 'block';
      document.getElementById(toEdit).innerText = 'Done';
    }else{
      document.getElementById(toChange).style.display = 'none';
      document.getElementById(toEdit).innerText = 'Edit';
    }    
  }
}

