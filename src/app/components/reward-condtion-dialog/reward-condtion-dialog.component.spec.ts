import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardCondtionDialogComponent } from './reward-condtion-dialog.component';

describe('RewardCondtionDialogComponent', () => {
  let component: RewardCondtionDialogComponent;
  let fixture: ComponentFixture<RewardCondtionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardCondtionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardCondtionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
