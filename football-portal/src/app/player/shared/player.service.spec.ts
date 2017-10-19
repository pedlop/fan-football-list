import { TestBed, inject } from '@angular/core/testing';

import { FootballPlayerService } from './player.service';

describe('FootballPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootballPlayerService]
    });
  });

  it('should be created', inject([FootballPlayerService], (service: FootballPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
