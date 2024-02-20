import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{

  addProductRequest: Product = {
    productId: '',
    productName: '',
    category: '',
    price: 0,
    unitsInStock: 0
  };

  constructor(private productService: ProductsService, private router: Router) {
    
  }

  ngOnInit(): void {
  }

  addProduct() {
    this.productService.addProduct(this.addProductRequest)
    .subscribe({
      next: (product) => {
        this.router.navigate(['products']);
      }
    });
  }

  
}
