import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAppinventivComponent } from './latest-appinventiv.component';

describe('LatestAppinventivComponent', () => {
  let component: LatestAppinventivComponent;
  let fixture: ComponentFixture<LatestAppinventivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestAppinventivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestAppinventivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
