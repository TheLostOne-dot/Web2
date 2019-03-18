import { TestBed } from '@angular/core/testing';

import { MesseageService } from './messeage.service';

describe('MesseageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MesseageService = TestBed.get(MesseageService);
    expect(service).toBeTruthy();
  });
});
