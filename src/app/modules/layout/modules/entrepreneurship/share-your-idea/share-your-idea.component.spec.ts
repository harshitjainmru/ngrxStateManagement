import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareYourIdeaComponent } from './share-your-idea.component';

describe('ShareYourIdeaComponent', () => {
  let component: ShareYourIdeaComponent;
  let fixture: ComponentFixture<ShareYourIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareYourIdeaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareYourIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
