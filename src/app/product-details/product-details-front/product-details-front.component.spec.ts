import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsFrontComponent } from './product-details-front.component';

describe('ProductDetailsFrontComponent', () => {
  let component: ProductDetailsFrontComponent;
  let fixture: ComponentFixture<ProductDetailsFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
