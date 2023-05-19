import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDocComponent } from './policy-doc.component';

describe('PolicyDocComponent', () => {
  let component: PolicyDocComponent;
  let fixture: ComponentFixture<PolicyDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
