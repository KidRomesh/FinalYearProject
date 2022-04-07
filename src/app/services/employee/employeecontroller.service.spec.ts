import { TestBed } from '@angular/core/testing';

import { EmployeecontrollerService } from './employeecontroller.service';

describe('EmployeecontrollerService', () => {
  let service: EmployeecontrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeecontrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
