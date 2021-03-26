import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies:any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.data.subscribe(data => {
      this.movies = data.movies.movies;
    });
  }

  fetchMovies(){

  }

  getMoviesByCountry(event: any){
    console.log("movies",event) ;
    this.apiService.getMoviesByCountry(event.country).subscribe((data:any) => {
      this.movies = data.movies;
    });
  }

}
