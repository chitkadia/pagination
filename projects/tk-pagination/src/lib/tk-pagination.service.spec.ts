import { TestBed, inject } from '@angular/core/testing';

import { TkPaginationService } from './tk-pagination.service';

describe('TkPaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TkPaginationService]
    });
  });

  it('should be created', inject([TkPaginationService], (service: TkPaginationService) => {
    expect(service).toBeTruthy();
  }));
});
