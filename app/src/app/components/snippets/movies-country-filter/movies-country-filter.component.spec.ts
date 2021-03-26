import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCountryFilterComponent } from './movies-country-filter.component';

describe('MoviesCountryFilterComponent', () => {
  let component: MoviesCountryFilterComponent;
  let fixture: ComponentFixture<MoviesCountryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesCountryFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesCountryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
