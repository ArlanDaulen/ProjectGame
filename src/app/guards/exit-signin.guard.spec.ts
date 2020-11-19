import { TestBed } from '@angular/core/testing';

import { ExitSigninGuard } from './exit-signin.guard';

describe('ExitSigninGuard', () => {
  let guard: ExitSigninGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExitSigninGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
