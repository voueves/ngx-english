import { TestBed, inject } from '@angular/core/testing';

import { WordRepositoryService } from './word-repository.service';

describe('WordRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordRepositoryService]
    });
  });

  it('should be created', inject([WordRepositoryService], (service: WordRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
