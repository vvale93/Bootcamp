import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from '../app/movie-list/movie-list.component';
import { EachmovieComponent } from './eachmovie/eachmovie.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movie/:id', component: EachmovieComponent },
  { path: '**', component: MovieListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
