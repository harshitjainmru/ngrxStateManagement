import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDinnerComponent } from './request-dinner.component';

describe('RequestDinnerComponent', () => {
  let component: RequestDinnerComponent;
  let fixture: ComponentFixture<RequestDinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestDinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
