import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movies-country-filter',
  templateUrl: './movies-country-filter.component.html',
  styleUrls: ['./movies-country-filter.component.scss']
})
export class MoviesCountryFilterComponent implements OnInit {
  @Output() filteredCountry: EventEmitter<object>= new EventEmitter() ;

  countriesList: string[] = ['Afghanistan','Albania','Algeria','Angola','Argentina','Armenia','Aruba','Australia','Austria','Bahamas','Bangladesh','Belarus','Belgium','Bermuda','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burma','Cambodia','Cameroon','Canada','Chad','Chile','China','Colombia','Congo','Costa Rica','Croatia','Cuba','Cyprus','Czech Republic','Czechoslovakia','Cète d\'Ivoire','Denmark','Dominican Republic','East Germany','Ecuador','Egypt','El Salvador','Estonia','Ethiopia','Faroe Islands','Federal Republic of Yugoslavia','Finland','France','Gabon','Georgia','Germany','Ghana','Greece','Greenland','Guatemala','Haiti','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Isle Of Man','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Liberia','Liechtenstein','Lithuania','Luxembourg','Macao','Madagascar','Malaysia','Mali','Malta','Martinique','Mauritania','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco','Nepal','Netherlands','New Zealand','Nigeria','North Korea','Norway','Pakistan','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Puerto Rico','Qatar','Republic of Macedonia','Romania','Russia','Rwanda','Samoa','Saudi Arabia','Senegal','Serbia','Serbia and Montenegro','Singapore','Slovakia','Slovenia','Somalia','South Africa','South Korea','Soviet Union','Spain','Sri Lanka','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','The Democratic Republic Of Congo','Trinidad and Tobago','Tunisia','Turkey','UK','USA','Uganda','Ukraine','United Arab Emirates','Uruguay','Uzbekistan','Vanuatu','Venezuela','Vietnam','West Germany','Yugoslavia','Zaire','Zimbabwe'] ;

   selectedCountry: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  remove(){
    this.selectedCountry = '' ;
    this.emitFilterChange() ;
  }

  emitFilterChange(){
    this.filteredCountry.emit({country: this.selectedCountry});
  }
}
