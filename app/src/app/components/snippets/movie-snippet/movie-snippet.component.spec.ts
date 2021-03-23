import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSnippetComponent } from './movie-snippet.component';

describe('MovieSnippetComponent', () => {
  let component: MovieSnippetComponent;
  let fixture: ComponentFixture<MovieSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
