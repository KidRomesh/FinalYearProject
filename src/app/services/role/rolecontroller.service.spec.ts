import { TestBed } from '@angular/core/testing';

import { RolecontrollerService } from './rolecontroller.service';

describe('RolecontrollerService', () => {
  let service: RolecontrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolecontrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
