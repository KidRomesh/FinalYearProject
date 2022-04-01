import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpteamsComponent } from './empteams.component';

describe('EmpteamsComponent', () => {
  let component: EmpteamsComponent;
  let fixture: ComponentFixture<EmpteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpteamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
