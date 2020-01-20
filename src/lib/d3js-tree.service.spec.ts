import { TestBed } from '@angular/core/testing';

import { D3jsTreeService } from './d3js-tree.service';

describe('D3jsTreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: D3jsTreeService = TestBed.get(D3jsTreeService);
    expect(service).toBeTruthy();
  });
});
