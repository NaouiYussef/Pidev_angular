import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubredditFrontComponent } from './create-subreddit-front.component';

describe('CreateSubredditFrontComponent', () => {
  let component: CreateSubredditFrontComponent;
  let fixture: ComponentFixture<CreateSubredditFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubredditFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubredditFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
