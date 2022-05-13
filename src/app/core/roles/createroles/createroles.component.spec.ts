import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterolesComponent } from './createroles.component';

describe('CreaterolesComponent', () => {
  let component: CreaterolesComponent;
  let fixture: ComponentFixture<CreaterolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaterolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
