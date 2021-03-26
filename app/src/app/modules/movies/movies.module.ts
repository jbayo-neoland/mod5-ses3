import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MaterialModule } from '../material/material.module';
import { MoviesComponent } from '../../components/views/movies/movies.component';
import { MovieSnippetComponent } from '../../components/snippets/movie-snippet/movie-snippet.component';
import { MoviesCountryFilterComponent } from '../../components/snippets/movies-country-filter/movies-country-filter.component';
@NgModule({
  declarations: [
    MoviesComponent,
    MovieSnippetComponent,
    MoviesCountryFilterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
