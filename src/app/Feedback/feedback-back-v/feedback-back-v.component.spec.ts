import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackBackVComponent } from './feedback-back-v.component';

describe('FeedbackBackVComponent', () => {
  let component: FeedbackBackVComponent;
  let fixture: ComponentFixture<FeedbackBackVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackBackVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackBackVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
