import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionRatingComponent } from './division-rating.component';

describe('DivisionRatingComponent', () => {
  let component: DivisionRatingComponent;
  let fixture: ComponentFixture<DivisionRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
