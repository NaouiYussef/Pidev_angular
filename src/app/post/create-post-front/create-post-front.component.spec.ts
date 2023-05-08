import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostFrontComponent } from './create-post-front.component';

describe('CreatePostFrontComponent', () => {
  let component: CreatePostFrontComponent;
  let fixture: ComponentFixture<CreatePostFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
