import { TestBed } from '@angular/core/testing';

import { AdminPathGuard } from './admin-guard.guard';

describe('AdminPathGuard', () => {
  let guard: AdminPathGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminPathGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
