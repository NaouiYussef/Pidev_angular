import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBComponent } from './chat-b.component';

describe('ChatBComponent', () => {
  let component: ChatBComponent;
  let fixture: ComponentFixture<ChatBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
