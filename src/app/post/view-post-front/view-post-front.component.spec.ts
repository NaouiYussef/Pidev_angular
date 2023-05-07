import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostFrontComponent } from './view-post-front.component';

describe('ViewPostFrontComponent', () => {
  let component: ViewPostFrontComponent;
  let fixture: ComponentFixture<ViewPostFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPostFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
