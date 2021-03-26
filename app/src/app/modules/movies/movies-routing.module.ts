import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneMovieResolverService } from 'src/app/services/one-movie-resolver.service';

import { MoviesComponent } from '../../components/views/movies/movies.component';
import { MoviesResolver } from '../../services/movies.resolver';

import { ShowComponent } from '../../components/views/show/show.component';
<<<<<<< HEAD

=======
>>>>>>> 2c9ee231a25819408a82dff80ce994e1b8338dfa

const routes: Routes = [
  {
    path: 'movies',
    pathMatch: 'full',
    component: MoviesComponent,
    resolve: {
      movies: MoviesResolver,
    },
  },
  {
    path: 'movies/:id',
    pathMatch: 'full',
    component: ShowComponent,
    resolve: { movie: OneMovieResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
