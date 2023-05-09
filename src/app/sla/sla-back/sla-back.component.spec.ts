import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaBackComponent } from './sla-back.component';

describe('SlaBackComponent', () => {
  let component: SlaBackComponent;
  let fixture: ComponentFixture<SlaBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlaBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
