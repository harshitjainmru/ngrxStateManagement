import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsrDetailComponent } from './dsr-detail.component';

describe('DsrDetailComponent', () => {
  let component: DsrDetailComponent;
  let fixture: ComponentFixture<DsrDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsrDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsrDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
