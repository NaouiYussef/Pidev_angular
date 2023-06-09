import {Component, OnInit, Output} from '@angular/core';
import {ProductService} from "../product.service";
import {SharedService} from "../shared.service";
import {Router} from "@angular/router";
import {Product} from "../product";
import {Category} from "../../category/category";
import {CategoryService} from "../../category/category.service";
import {  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-front',
  templateUrl: './product-front.component.html',
  styleUrls: ['./product-front.component.css']
})
export class ProductFrontComponent implements OnInit {
  @Output() openForm = new EventEmitter<void>();

  products!: Product[];
  product!: Product;
  categories!: Category[];
  category!: Category;
  selectedCategory: string;
  filteredProducts: Product[];
  totalPagesArray: number[] = [];

  pageSize = 6;
  currentPage = 1;
  totalPages: number;
  paginatedProducts: Product[];

  // currentPagef: number = 1;
  // pageSizef: number = 2;
  // totalItemsf: number = 0;
  constructor(private productService: ProductService, private sharedService: SharedService,private router: Router, private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.product= new Product();
    this.productService.getProduct().subscribe(data => {
        this.products = data;
        // this.totalItemsf = this.products.length;

      }
    );
    this.category= new Category();
    this.categoryService.getCategory().subscribe(data2 => {
      this.categories = data2;

    });

  }







  filterByCategory(category: string): void {
    const filteredProducts = this.products.filter((product: Product) => {
      const productCategory = product.categoryp.categoryName;
      return productCategory === category;
    });

    // Update the products array with the filtered results
    this.products = filteredProducts;
  }
  resetFilters(): void {
    this.refreshPage();  }

  sendDatafront(id: number) {
    this.products.forEach((product : Product)=>{
      if (product.id==id) {
        console.log(product)
        this.sharedService.setData(product.details);

      }
    });
    this.router.navigate(['/app-product-details-front']);

  }
  public searchProds(key: string): void {
    console.log(key);
    const results: Product[] = [];
    for (const prod of this.products) {
      if (prod.productName.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || prod.categoryp.categoryName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(prod);
      }
    }
    this.products = results;
    // this.totalItemsf = this.products.length;
    if (results.length === 0 || !key) {

      this.productService.getProduct();
      this.refreshPage();
    }

  }
  refreshPage() {
    location.reload(); // Use the location.reload() method to refresh the page
  }
  // totalPagesf(): number {
  //   return Math.ceil(this.totalItemsf / this.pageSizef);
  // }
}
