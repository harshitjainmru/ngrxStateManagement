import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTimePickerComponent } from './common-time-picker.component';

describe('CommonTimePickerComponent', () => {
  let component: CommonTimePickerComponent;
  let fixture: ComponentFixture<CommonTimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonTimePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
