import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmcComponent } from './rmc.component';

describe('RmcComponent', () => {
  let component: RmcComponent;
  let fixture: ComponentFixture<RmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
