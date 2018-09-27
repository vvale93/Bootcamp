import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { EachmovieComponent } from './eachmovie/eachmovie.component';
import { AppRoutingModule } from './app.routing';
import { MovieService } from './movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    EachmovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
