import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FresherTrainingComponent } from './fresher-training.component';

describe('FresherTrainingComponent', () => {
  let component: FresherTrainingComponent;
  let fixture: ComponentFixture<FresherTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FresherTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FresherTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
