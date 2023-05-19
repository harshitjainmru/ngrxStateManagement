import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollbackLeaveComponent } from './rollback-leave.component';

describe('RollbackLeaveComponent', () => {
  let component: RollbackLeaveComponent;
  let fixture: ComponentFixture<RollbackLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollbackLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollbackLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
