import { TestBed } from '@angular/core/testing';

import { DataLoadResolver } from './data-load.resolver';

describe('DataLoadResolver', () => {
  let resolver: DataLoadResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DataLoadResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
