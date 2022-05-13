import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolecompComponent } from './rolecomp.component';

describe('RolecompComponent', () => {
  let component: RolecompComponent;
  let fixture: ComponentFixture<RolecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolecompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
