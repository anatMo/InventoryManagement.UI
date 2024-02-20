import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductsService } from '../../../services/products.service/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{

  products: Product[] = [];
  productNameFilter: string = '';
  categoryFilter: string = '';
  productNameFilterEnabled: boolean = false;
  categoryFilterEnabled: boolean = false;
  selectedFilter: string = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getAllProducts()
      .subscribe({
        next: (products) => {
          this.products = products;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

  onFilterChange(): void {
    if (this.selectedFilter === 'productName') {
        this.productNameFilterEnabled = true;
        this.categoryFilterEnabled = false;
    } else if (this.selectedFilter === 'category') {
        this.productNameFilterEnabled = false;
        this.categoryFilterEnabled = true;
    }
  }

  get filteredProducts(): Product[] {
    if (!this.products) return [];

    if (this.productNameFilterEnabled) {
      return this.products.filter(product =>
        product.productName.toLowerCase().includes(this.productNameFilter.toLowerCase())
      );
    } else if (this.categoryFilterEnabled) {
      return this.products.filter(product =>
        product.category.toLowerCase().includes(this.categoryFilter.toLowerCase())
      );
    } else {
      return [];
    }
  }
}
