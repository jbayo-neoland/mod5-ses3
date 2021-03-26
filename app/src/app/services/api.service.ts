import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(payload: any): Observable<any> {
    return this.http.post(`${this.BASE_URI}/auth/login`, payload);
  }

  getAllMovies() {
    return this.http.get(`${this.BASE_URI}/movies`);
  }
  getOneMovie(id: any) {
    return this.http.get(`${this.BASE_URI}/movies/${id}`);
  }
}
