import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MaterialModule } from '../material/material.module';
import { MoviesComponent } from '../../components/views/movies/movies.component';
import { MovieSnippetComponent } from '../../components/snippets/movie-snippet/movie-snippet.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieSnippetComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
