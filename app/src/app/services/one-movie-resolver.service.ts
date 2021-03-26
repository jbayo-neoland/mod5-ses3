import { Injectable } from '@angular/core';
import {
   Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OneMovieResolverService implements Resolve<boolean>  {

  BASE_URI = 'http://localhost:3000/api';

  

  constructor( private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.params.id
    return this.apiService.getOneMovie(id);
  }
}
