import { TestBed } from '@angular/core/testing';

import { DiariesServiceService } from './diaries-service.service';

describe('DiariesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiariesServiceService = TestBed.get(DiariesServiceService);
    expect(service).toBeTruthy();
  });
});
