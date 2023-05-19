import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingTopicComponent } from './training-topic.component';

describe('TrainingTopicComponent', () => {
  let component: TrainingTopicComponent;
  let fixture: ComponentFixture<TrainingTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
