import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferACandidateComponent } from './refer-acandidate.component';

describe('ReferACandidateComponent', () => {
  let component: ReferACandidateComponent;
  let fixture: ComponentFixture<ReferACandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferACandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferACandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
