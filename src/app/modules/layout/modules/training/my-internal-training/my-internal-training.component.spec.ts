import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInternalTrainingComponent } from './my-internal-training.component';

describe('MyInternalTrainingComponent', () => {
  let component: MyInternalTrainingComponent;
  let fixture: ComponentFixture<MyInternalTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInternalTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInternalTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
