import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  movie = {
      "_id": Object,
      "plot": String,
      "genres": Array,
      "runtime": Number,
      "cast": Array,
      "num_mflix_comments": Number,
      "title": String,
      "fullplot": String,
      "countries": Array,
      "released": Object,
      "directors": Array,
      "rated": String,
      "awards": Object,
      "lastupdated": String,
      "year": Number,
      "imdb": Object,
      "type": String,
      "tomatoes": Object
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.movie = data.details.movies;
    });
  }

}
