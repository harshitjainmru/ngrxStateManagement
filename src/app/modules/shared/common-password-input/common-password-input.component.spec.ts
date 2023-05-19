import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPasswordInputComponent } from './common-password-input.component';

describe('CommonPasswordInputComponent', () => {
  let component: CommonPasswordInputComponent;
  let fixture: ComponentFixture<CommonPasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonPasswordInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
