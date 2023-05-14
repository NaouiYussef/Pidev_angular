import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFComponent } from './feedback-f.component';

describe('FeedbackFComponent', () => {
  let component: FeedbackFComponent;
  let fixture: ComponentFixture<FeedbackFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
