import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForTrainingComponent } from './request-for-training.component';

describe('RequestForTrainingComponent', () => {
  let component: RequestForTrainingComponent;
  let fixture: ComponentFixture<RequestForTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
