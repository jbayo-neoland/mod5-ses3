import { TestBed } from '@angular/core/testing';

import { OneMovieResolverService } from './one-movie-resolver.service';

describe('OneMovieResolverService', () => {
  let service: OneMovieResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneMovieResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
