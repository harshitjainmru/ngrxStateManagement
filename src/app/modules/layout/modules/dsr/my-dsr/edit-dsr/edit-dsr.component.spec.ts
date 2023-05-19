import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDsrComponent } from './edit-dsr.component';

describe('EditDsrComponent', () => {
  let component: EditDsrComponent;
  let fixture: ComponentFixture<EditDsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
