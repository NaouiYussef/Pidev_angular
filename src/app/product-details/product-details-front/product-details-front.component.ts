import { Component, OnInit } from '@angular/core';
import {ProductDetails} from "../product-details";
import {SharedService} from "../../Product/shared.service";

@Component({
  selector: 'app-product-details-front',
  templateUrl: './product-details-front.component.html',
  styleUrls: ['./product-details-front.component.css']
})
export class ProductDetailsFrontComponent implements OnInit {

  receivedData: ProductDetails[];
  productDetails : ProductDetails[];
  constructor(private sharedService: SharedService) {
    this.receivedData = this.sharedService.getData();
  }
  ngOnInit(): void {
    console.log(this.receivedData)
    this.productDetails = this.receivedData;
  }
}
