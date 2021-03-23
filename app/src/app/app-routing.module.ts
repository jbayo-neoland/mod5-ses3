import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';
import { MoviesComponent } from './components/views/movies/movies.component';
import { LoginComponent } from './components/views/login/login.component';

import { MoviesResolver } from './services/movies.resolver';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', component: }
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', pathMatch: 'full', component: LoginComponent,},
  {
    path: 'movies',
    pathMatch: 'full',
    component: MoviesComponent,
    resolve: {
      movies: MoviesResolver
    }
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
