import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{

  products: Product[] = [];
  // productNameFilter: string = '';
  // categoryFilter: string = '';
  // productNameFilterEnabled: boolean = false;
  // categoryFilterEnabled: boolean = false;
  // selectedFilter: string = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit() : void {
    this.productsService.getAllProducts()
    .subscribe({
      next: (products) => {
        this.products = products;
      },
      error:  (response) => {
        console.log(response);
      }
    })

  }

  // products: Product[] = [
  //   {
  //     productId: '00000000-0000-0000-0000-000000000000',
  //     productName: '6',
  //     category: 'IPhone',
  //     price: 4000,
  //     unitsInStock: 20
  //   },
  //   {
  //     productId: '10000000-0000-0000-0000-000000000000',
  //     productName: '12',
  //     category: 'IPhone',
  //     price: 6000,
  //     unitsInStock: 44
  //   },
  //   {
  //     productId: '20000000-0000-0000-0000-000000000000',
  //     productName: 'ES',
  //     category: 'Galaxy',
  //     price: 3300,
  //     unitsInStock: 26
  //   }
  // ];

  // constructor(private productsService: ProductsService) {}

  // ngOnInit(): void {
  //   this.loadProducts();
  // }

  // loadProducts(): void {
  //   this.productsService.getAllProducts()
  //     .subscribe({
  //       next: (products) => {
  //         this.products = products;
  //       },
  //       error: (response) => {
  //         console.log(response);
  //       }
  //     });
  // }

  // onFilterChange(): void {
  //   if (this.selectedFilter === 'productName') {
  //       this.productNameFilterEnabled = true;
  //       this.categoryFilterEnabled = false;
  //   } else if (this.selectedFilter === 'category') {
  //       this.productNameFilterEnabled = false;
  //       this.categoryFilterEnabled = true;
  //   }
  // }


  // get filteredProducts(): Product[] {
  //   if (!this.products) return [];

  //   if (this.productNameFilterEnabled) {
  //     return this.products.filter(product =>
  //       product.productName.toLowerCase().includes(this.productNameFilter.toLowerCase())
  //     );
  //   } else if (this.categoryFilterEnabled) {
  //     return this.products.filter(product =>
  //       product.category.toLowerCase().includes(this.categoryFilter.toLowerCase())
  //     );
  //   } else {
  //     return [];
  //   }
  // }
}
