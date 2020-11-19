import { TestBed } from '@angular/core/testing';

import { ExitAboutGuard } from './exit-about.guard';

describe('ExitAboutGuard', () => {
  let guard: ExitAboutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExitAboutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
