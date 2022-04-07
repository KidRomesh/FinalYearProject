import { TestBed } from '@angular/core/testing';

import { DeptcontrollerService } from './deptcontroller.service';

describe('DeptcontrollerService', () => {
  let service: DeptcontrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptcontrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
