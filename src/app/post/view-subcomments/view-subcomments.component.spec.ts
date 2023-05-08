import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubcommentsComponent } from './view-subcomments.component';

describe('ViewSubcommentsComponent', () => {
  let component: ViewSubcommentsComponent;
  let fixture: ComponentFixture<ViewSubcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubcommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
