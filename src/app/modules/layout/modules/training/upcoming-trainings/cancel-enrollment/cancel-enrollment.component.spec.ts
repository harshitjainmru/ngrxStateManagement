import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelEnrollmentComponent } from './cancel-enrollment.component';

describe('CancelEnrollmentComponent', () => {
  let component: CancelEnrollmentComponent;
  let fixture: ComponentFixture<CancelEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelEnrollmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
