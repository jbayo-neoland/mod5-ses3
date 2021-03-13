import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies:any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.data.subscribe(data => {
      this.movies = data.movies.movies;
    });
  }

}
