import { TestBed } from '@angular/core/testing';

import { MessgesService } from './messeges.service';

describe('MessgesService', () => {
  let service: MessgesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessgesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
