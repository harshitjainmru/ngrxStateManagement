import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentChangeComponent } from './department-change.component';

describe('DepartmentChangeComponent', () => {
  let component: DepartmentChangeComponent;
  let fixture: ComponentFixture<DepartmentChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
